const express = require("express");
const router = express.Router();
const axios = require("axios");
const {decrypt} = require("../controllers/decryption/decrypt-text");
const { PythonShell } = require("python-shell");
const EncryptedMessage = require("../models/data - receiver");
const signupDetails = require("../models/User");

router.post("/decrypt-text", async (req, res) => {
    let { senderId, receiverId } = req.body;

    try {
        let Details = await encryptedStore.find({ senderId: senderId, "receivers.receiverId": receiverId });
        
        if (Details.length === 0) {
            return res.status(404).json({ error: 'Encrypted message not found for these users' });
        }

        let encryptedText = Details[0].encryptedText;
        let newIndex = Details[0].indices;

        let decryptedKey = await axios.post('http://localhost:3000/d-key/decrypt-key', {
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
    let { senderId, receiverId } = req.body;

    try {
        const encryptedMessage = await EncryptedMessage.findOne({
            "senderId": senderId,
            "receivers.receiverId": receiverId
        }).sort({ createdAt: -1 });

        if (!encryptedMessage) {
            return res.status(404).json({ error: "Message not found for this receiver." });
        }

        const receiver = encryptedMessage.receivers.find(receiver => receiver.receiverId.toString() === receiverId);
        const encryptedKey = receiver.key;

        const receiverDetails = await signupDetails.findById(receiverId, { privateKey: 1, _id: 0 });
        if (!receiverDetails) {
            return res.status(404).json({ error: "Receiver not found." });
        }

        const privateKeyBase64 = receiverDetails.privateKey;

        let options = {
            pythonPath: '/usr/bin/python3',
            scriptPath: './controllers',
            args: [encryptedKey, privateKeyBase64],
            pythonOptions: ['-u'],
        };
        
        const results = await PythonShell.run('decrypt-key.py', options);

        const decryptedAesKeyBase64 = results[0];

        await EncryptedMessage.updateOne(
            { _id: encryptedMessage._id },
            { $pull: { receivers: { receiverId: receiverId } } }
        );

        
        res.status(200).json({decryptedAesKeyBase64});

    } catch (error) {
        console.error("Error decrypting message:", error);
        res.status(400).json({ error: error.message || "Internal server error" });
    }
});








module.exports = router;

