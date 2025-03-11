const History = require("../models/user-history");
const user = require("../models/User");
const dataModel = require("../models/data - receiver");
const {PythonShell} = require("python-shell");
const mongoose = require("mongoose");


    async function encryptKey(senderId, receiverIds){
        try {
            let senderData = await History.find({id : new mongoose.Types.ObjectId(senderId)}, { data: 1, _id: 0 });
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
                return { error: "No valid receivers found" };
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
    
            return {
                message: "Encryption and storage successful",
                encryptedMessage: newEncryptedData,
            };
    
        } catch (error) {
            console.error(error);
            return { error: "Internal server error" };
        }
}



module.exports = {encryptKey};