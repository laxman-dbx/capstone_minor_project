const EncryptedMessage = require("../models/data - receiver");
const signupDetails = require("../models/User");
const {PythonShell} = require("python-shell")

async function decryptKey(senderId, receiverId){
    try {
        const encryptedMessage = await EncryptedMessage.findOne({
            "userId": senderId,
            "receivers.receiverId": receiverId
        }).sort({ createdAt: -1 });
        
        if (!encryptedMessage) {
            return { error: "Message not found for this receiver." };
        }

        const receiver = encryptedMessage.receivers.find(receiver => receiver.receiverId.toString() === receiverId);
        const encryptedKey = receiver.encryptedAesKey;

        const receiverDetails = await signupDetails.findById(receiverId).select('+privateKey'); 
        if (!receiverDetails) {
            return { error: "Receiver not found." };
        }

        const privateKeyBase64 = receiverDetails.getDecryptedPrivateKey();

        let options = {
            pythonPath: '/usr/bin/python3',
            scriptPath: './utils/decryption',
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
        
        return {decryptedAesKeyBase64 : decryptedAesKeyBase64};

    } catch (error) {
        console.error("Error decrypting message:", error);
        return { error: error.message || "Internal server error" };
    }
}

module.exports = {decryptKey};