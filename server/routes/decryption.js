const express = require("express");
const axios = require("axios");

const {decrypt} = require("../controllers/decryption/decrypt-text");
const EncryptedMessage = require("../models/data - receiver");
const signupDetails = require("../models/User");
const protect = require("../middlewares/authMiddleware");

const { PythonShell } = require("python-shell");

const router = express.Router();

router.post("/decrypt-text", protect, async (req, res) => {
    let senderId = req.userId;
    let receiverId = req.body.receiverId;

    try {
        let Details = await EncryptedMessage.find({ userId: senderId, "receivers.receiverId": receiverId });
        
        if (Details.length === 0) {
            return res.status(404).json({ error: 'Encrypted message not found for these users' });
        }

        let encryptedText = Details[0].encryptedText;
        let newIndex = Details[0].indices;

        let decryptedKey = await axios.post('http://localhost:5000/decrypt/decrypt-key', {
            senderId: senderId,
            receiverId: receiverId
        });

        let key = decryptedKey.data.decryptedAesKeyBase64;
        let modifiedText = encryptedText;
        let indexShift = 0;
        for (let i = 0; i < newIndex.length; i++) {
            let [start_index, end_index] = newIndex[i];

            start_index += indexShift;
            end_index += indexShift;

            let cipherText = modifiedText.slice(start_index, end_index);

            let plainText = decrypt(cipherText, key);

            if (!plainText) {
                return res.status(500).json({ error: 'Decryption failed for part of the message' });
            }
            modifiedText = modifiedText.slice(0, start_index) + plainText + modifiedText.slice(end_index);

            indexShift += plainText.length - cipherText.length;
        }
        res.json({ text: modifiedText });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during decryption' });
    }
});

    


router.post("/decrypt-key", async (req, res) => {
    let {senderId, receiverId} = req.body;

    try {
        const encryptedMessage = await EncryptedMessage.findOne({
            "userId": senderId,
            "receivers.receiverId": receiverId
        }).sort({ createdAt: -1 });
        
        if (!encryptedMessage) {
            return res.status(404).json({ error: "Message not found for this receiver." });
        }

        const receiver = encryptedMessage.receivers.find(receiver => receiver.receiverId.toString() === receiverId);
        const encryptedKey = receiver.encryptedAesKey;

        const receiverDetails = await signupDetails.findById(receiverId).select('+privateKey'); 
        if (!receiverDetails) {
            return res.status(404).json({ error: "Receiver not found." });
        }

        const privateKeyBase64 = receiverDetails.getDecryptedPrivateKey();

        let options = {
            pythonPath: '/usr/bin/python3',
            scriptPath: './controllers/decryption',
            args: [encryptedKey, privateKeyBase64],
            pythonOptions: ['-u'],
        };
        
        const results = await PythonShell.run('decrypt-key.py', options);

        const decryptedAesKeyBase64 = results[0];

        await EncryptedMessage.updateOne(
            { _id: encryptedMessage._id },
            { $pull: { receivers: { receiverId: receiverId } } }
        );

        const updatedDoc = await EncryptedMessage.findOne({ _id: encryptedMessage._id });

        if (updatedDoc && updatedDoc.receivers.length === 0) {
            await EncryptedMessage.deleteOne({ _id: encryptedMessage._id });
        }
        
        res.status(200).json({decryptedAesKeyBase64});

    } catch (error) {
        console.error("Error decrypting message:", error);
        res.status(400).json({ error: error.message || "Internal server error" });
    }
});


module.exports = router;

