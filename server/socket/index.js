const socketAuth = require('../middlewares/socketAuth');
const Ticket = require('../models/Ticket');

module.exports = (io) => {
  io.use(socketAuth);

  io.on('connection', (socket) => {
    console.log('User connected:', socket.user.id);

    const userRoom = `user_${String(socket.user.id)}`;
    socket.join(userRoom);

    socket.join('admin');

    socket.on('sendMessage', async (data) => {
      try {
        const ticket = await Ticket.findById(data.ticketId);
        const userRoom = `user_${String(socket.user.id)}`;
        if (!ticket) {
          socket.emit('error', { message: 'Ticket not found' });
          return;
        }

        const message = {
          sender: socket.user.role === 'admin' ? 'admin' : 'user',
          message: data.message,
          timestamp: new Date()
        };
        ticket.messages.push(message);
        await ticket.save();

        io.to('admin').to(userRoom).emit('chatMessage', {
          ticketId: ticket._id,
          ...message
        });
      } catch (error) {
        console.error('Socket message error:', error);
        socket.emit('error', { message: 'Failed to send message' });
      }
    });

    socket.on('updateTicketStatus', async (data) => {
      try {
        const ticket = await Ticket.findById(data.ticketId);
        if (!ticket || socket.user.role !== 'admin') {
          return;
        }

        ticket.status = data.status;
        await ticket.save();

        io.to(`user_${String(ticket.user)}`).to('admin').emit('ticketUpdate', {
          ticketId: ticket._id,
          status: ticket.status
        });
      } catch (error) {
        console.error('Status update error:', error);
      }
    });

    socket.on('getChatHistory', async (data, callback) => {
      try {
        const ticket = await Ticket.findById(data.ticketId);
        if (!ticket) {
          callback({ error: 'Ticket not found' });
          return;
        }

        callback({ history: ticket.messages });
      } catch (error) {
        callback({ error: 'Failed to fetch chat history' });
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.user?.id || 'Unknown');
    });
  });
};
