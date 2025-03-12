const EncryptedMessage = require("../models/data - receiver");
const { decryptKey } = require("./decryptKey");
const {decrypt} = require("../utils/decryption/decrypt-text");

//deletion remove
// receiverId, dataId, - decryption
// sharedwithme -> encrypted msgs, data id, senderName, time stamp
// sharedbyme -> receivers names, encrypted msgs, time stamp
//deletion of encrypted message with only senderId , dataId
// decryption for sender

exports.decryptText = async (req, res)=>{

    let receiverId = req.userId;
    let dataId = req.body.dataId;

    try {
        let Details = await EncryptedMessage.findById(dataId);
        
        if (Details.length === 0) {
            return res.status(404).json({ error: 'Encrypted message not found for these users' });
        }

        let encryptedText = Details.encryptedText;
        let newIndex = Details.indices;

        let decryptedKey = await decryptKey(dataId, receiverId);
        let key = decryptedKey.decryptedAesKeyBase64;
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
}