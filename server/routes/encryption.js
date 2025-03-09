const express = require("express");
const { PythonShell } = require('python-shell');
const {encryptText} = require("../controllers/encryption/encrypt-text");
const authMiddleWare = require("../middlewares/authMiddleware");
const dataModel = require("../models/data - receiver");  
const axios = require("axios");
const user = require("../models/User");
const crypto = require("crypto");

const router = express.Router();

router.post("/detect-pii", async (req, res) => {
    let text = req.body.text;
    if (!text) {
        return res.status(400).json({ error: "Text parameter is required" });
    }

    let options = {
        pythonPath: '/usr/bin/python3',
        args: [text],
        pythonOptions: ['-u'],
        scriptPath: './routes',
    };

    try {
        let result = await PythonShell.run('model.py', options);
        if (result[0]=="No entities detected.") { 
            res.status(400).json({ success : false, error: "Text contains no PII data" });
        } else {
            const cleanedString = result[0]
            .replace(/'/g, '"')
            .replace(/\s([a-zA-Z0-9_]+):/g, '"$1":');
            res.status(200).send(JSON.parse(cleanedString));
        }
    } catch (error) {
        console.error("Error executing Python script:", error);
        res.status(500).json({ error: "Error executing Python script", details: error.message });
    }
});

router.post("/encrypt-text", authMiddleWare, async (req, res) => {
    let id = req.userId;
    let {receiverIds, text} = req.body;

    try {
        const response = await axios.post('http://localhost:5000/encrypt/detect-pii', {
            text: text
        });

        const receivers = await user.find({ '_id': { $in: receiverIds } }, 'publicKey');

        if (!receivers || receivers.length !== receiverIds.length) {
            return res.status(404).json({ error: 'One or more receivers not found' });
        }

        const entityEntries = Object.entries(response.data);
        entityEntries.sort((a, b) => a[1].start_index - b[1].start_index);

        const key = crypto.randomBytes(32);
        const hexKey = key.toString('hex');

        let modifiedText = text;
        let indexShift = 0;
        let newIndicesArray = [];

        for (let [entityName, entityData] of entityEntries) {
            let { start_index, end_index } = entityData;

            start_index += indexShift;
            end_index += indexShift;

            let plain_text = entityName;
            let cipher_text = encryptText(plain_text, hexKey); // Encrypt the detected PII entity

            newIndicesArray.push([start_index, start_index + cipher_text.length]);

            modifiedText = modifiedText.slice(0, start_index) + cipher_text + modifiedText.slice(end_index);

            indexShift += cipher_text.length - plain_text.length;
        }

        const updatedUser = await user.findByIdAndUpdate(
            id, 
            {
                $push: {
                    "data": {
                        key: hexKey,
                        indices: newIndicesArray,
                        encryptedText: modifiedText,
                        receiverDetails: receivers.map(receiver => ({
                            receiverId: receiver._id,
                        }))
                    }
                }
            },
            { new: true }
        );
        

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ encryptedText: modifiedText, newIndex: newIndicesArray });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});


router.post("/replace-chars", async (req, res) => {
    let text = req.body.text;

    try {
        const response = await axios.post('http://localhost:5000/encrypt/detect-pii', {
            text: text
        });
        const entityEntries = Object.entries(response.data);
        entityEntries.sort((a, b) => a[1].start_index - b[1].start_index);

        let modifiedText = text;

        newIndicesArray = [];

        for (let [entityName, entityData] of entityEntries) {
            let { start_index, end_index } = entityData;

            let plain_text = entityName;
            let cipher_text = '*'.repeat(plain_text.length-1);

            newIndicesArray.push([start_index, start_index + cipher_text.length]);

            modifiedText = modifiedText.slice(0, start_index+1) + cipher_text + modifiedText.slice(end_index);
        }

        res.json({ encryptedText: modifiedText, newIndex: newIndicesArray });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});


router.post("/encrypt-key", authMiddleWare, async (req, res) => {
    let senderId = req.userId;
    let {receiverIds} = req.body;

    try {
        let senderData = await user.findById(senderId, { data: 1, _id: 0 });
        if (!senderData || senderData.data.length === 0) {
            return res.status(404).json({ error: "Sender data not found" });
        }

        let aesKeyBase64 = senderData.data[0].key;
        let encryptedText = senderData.data[0].encryptedText;
        let indices = senderData.data[0].indices;

        let receivers = await user.find(
            { _id: { $in: receiverIds } },
            { _id: 1, publicKey: 1 }
        );

        if (receivers.length === 0) {
            return res.status(404).json({ error: "No valid receivers found" });
        }

        let encryptedReceivers = [];
        console.log(aesKeyBase64 + " " + receivers)

        for (let receiver of receivers) {
            let options = {
                pythonPath: "/usr/bin/python3",
                scriptPath: "./controllers/encryption",
                args: [aesKeyBase64, receiver.publicKey],
                pythonOptions: ["-u"],
            };

            const results = await PythonShell.run("encrypt-key.py", options);
            const encryptedAesKeyBase64 = results[0];

            encryptedReceivers.push({
                receiverId: receiver._id,
                key: encryptedAesKeyBase64,
            });
        }

        const newEncryptedData = new dataModel({
            userId: senderId,
            indices: indices,  
            encryptedText: encryptedText,
            receivers: encryptedReceivers, 
            createdAt: Date.now(), 
        });

        await newEncryptedData.save();

        res.status(200).json({
            message: "Encryption and storage successful",
            encryptedMessage: newEncryptedData,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = router;
