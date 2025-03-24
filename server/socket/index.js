// socket/index.js
const socketAuth = require("../middlewares/socketAuth");
const Ticket = require("../models/Ticket");
const { createNotification } = require("../utils/notificationManager");

module.exports = (io) => {
  io.use(socketAuth);

  io.on("connection", (socket) => {
    console.log("User connected:", socket.user.id);

    socket.on("sendMessage", async (data, callback) => {
      try {
        const { ticketId, message } = data;
        if (!ticketId || !message) {
          return callback({ error: "Ticket ID and message are required" });
        }

        const ticket = await Ticket.findById(ticketId);
        if (!ticket) {
          return callback({ error: "Ticket not found" });
        }

        const ticketOwnerId = ticket.user || ticket.userId;
        const userId = String(socket.user.id);
        const isTicketOwner = String(ticketOwnerId) === userId;
        const isAdmin = socket.user.role === "admin";

        if (!isAdmin && !isTicketOwner) {
          return callback({ error: "Unauthorized" });
        }

        const newMessage = {
          sender: isAdmin ? "admin" : "user",
          message,
          timestamp: new Date(),
        };

        ticket.messages.push(newMessage);
        await ticket.save();

        if (isAdmin) {
          await createNotification(
            ticket.user,
            "Admin responded to your ticket",
            "support_response",
            { ticketId: ticket._id },
          );
        }

        // Emit directly to all connected clients listening for this specific ticket ID.
        io.emit(`chatMessage_${ticketId}`, newMessage);
        callback({ success: true });
      } catch (error) {
        console.error("Error sending message:", error);
        callback({ error: "Failed to send message" });
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.user.id);
    });
  });
};
