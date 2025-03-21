const encryptedMessage = require("../models/dataReceiver");
const mongoose = require("mongoose");

exports.senderDeletion = async (req, res) => {
  const senderId = req.userId;
  const { dataId } = req.params.messageId;

  const dataid = new mongoose.Types.ObjectId(dataId);

  try {
    const result = await encryptedMessage.deleteOne({
      _id: dataid,
      userId: senderId,
    });

    if (result.deletedCount === 0) {
      return res.status(200).json({
        success: false,
        error: "Message not found or sender is not authorized to delete",
      });
    }
    res.status(200).json({
      success: true,
      message: "Encrypted message deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
