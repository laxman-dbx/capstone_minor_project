const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["message_encrypted", "message_decrypted", "support_response"],
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    metadata: {
      messageId: mongoose.Schema.Types.ObjectId,
      ticketId: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Notification", NotificationSchema);
