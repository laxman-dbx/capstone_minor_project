const History = require("../models/user-history");
const user = require("../models/User");
const dataModel = require("../models/data - receiver");
const {PythonShell} = require("python-shell");

exports.encryptKey = async (req, res)=>{
    let senderId = req.userId;
    let {receiverIds} = req.body;

    try {
        let senderData = await History.find({id : senderId}, { data: 1, _id: 0 });
        let data;
        if (senderData.length > 0) {
            let sortedData = senderData[0].data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            data = sortedData[0];
        }

        let aesKeyBase64 = data.key;
        let encryptedText = data.encryptedText;
        let indices = data.indices;

        let receivers = await user.find(
            { _id: { $in: receiverIds } },
            { _id: 1, publicKey: 1 }
        );

        if (receivers.length === 0) {
            return res.status(404).json({ error: "No valid receivers found" });
        }

        let encryptedReceivers = [];

        for (let receiver of receivers) {
            let options = {
                pythonPath: "/usr/bin/python3",
                scriptPath: "./utils/encryption",
                args: [aesKeyBase64, receiver.publicKey],
                pythonOptions: ["-u"],
            };

            const results = await PythonShell.run("encrypt-key.py", options);
            const encryptedAesKeyBase64 = results[0];
            encryptedReceivers.push({
                receiverId: receiver._id,
                encryptedAesKey: encryptedAesKeyBase64,
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
}