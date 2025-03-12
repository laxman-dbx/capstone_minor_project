const EncryptedMessages = require("../models/data - receiver");

exports.sharedToMe = async (req, res) => {
    const userId = req.userId;

    try {
        const sharedFiles = await EncryptedMessages.find({
            "receivers.receiverId": userId, 
        })
            .select("_id userId encryptedText createdAt");

        if (sharedFiles.length === 0) {
            return res.status(404).json({ success: true, message: "No files shared with you." });
        }

        res.status(200).json({ success: true, sharedFiles });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching shared files." });
    }
};
