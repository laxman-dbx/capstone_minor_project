const express = require("express");
const { PythonShell } = require('python-shell');
const axios = require("axios");
const {encryptText} = require("../controllers/encrypt");
const signup = require("../models/signup");
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

router.post("/encrypt-text", async (req, res) => {
    let {id, receiverIds, text} = req.body;

    try {
        const response = await axios.post('http://localhost:3000/encrypt/detect-pii', {
            text: text
        });
        const receivers = await signup.find({ '_id': { $in: receiverIds } }, 'publicKey');

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
            let cipher_text = encryptText(plain_text, hexKey);

            newIndicesArray.push([start_index, start_index + cipher_text.length]);

            modifiedText = modifiedText.slice(0, start_index) + cipher_text + modifiedText.slice(end_index);

            indexShift += cipher_text.length - plain_text.length;
        }

        const updatedUser = await signup.findByIdAndUpdate(
            id, 
            {
                $push: {
                    "data": {
                        key: hexKey,
                        indices: newIndicesArray,
                        encryptedText: modifiedText,
                        receiverDetails: receivers.map(receiver => ({
                            receiverId: receiver._id,
                            reciverPublicKey: receiver.publicKey
                        }))
                    }
                }
            },
            { new: true }
        );
        

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ encryptedText: modifiedText, newIndex: newIndicesArray});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});


router.post("/replace-chars", async (req, res) => {
    let text = req.body.text;

    try {
        const response = await axios.post('http://localhost:3000/encrypt/detect-pii', {
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



module.exports = router;
