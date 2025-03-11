const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    data: [
      {
        key: { type: String },
        indices: {
          type: [[Number]],
          required: true,
        },
        encryptedText: { type: String },
        receiverDetails: [
          {
            receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          },
        ],
        createdAt: { type: Date, default: Date.now }, 
      }],
  },
);

module.exports = mongoose.model("History", historySchema);
