const detectPii = require("./detectPii")
const user = require("../models/User");
const mongoose = require("mongoose");
const History = require("../models/user-history");
const crypto = require("crypto");
const {encrypt_text} = require("../utils/encryption/encrypt-text");
const {encryptKey} = require("./encryptKey");
const {ObjectId}=mongoose.Types;

exports.encryptText = async (req, res) => {
    let id = req.userId;
    let {receiverIds, text} = req.body;

    try {
        const response = await detectPii(text);
        const receivers = await user.find({ '_id': { $in:receiverIds}},'publicKey');

        if (!receivers) {
            return res.status(404).json({ error: 'One or more receivers not found' });
        }

        const entityEntries = Object.entries(response);
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
            let cipher_text = encrypt_text(plain_text, hexKey);

            newIndicesArray.push([start_index, start_index + cipher_text.length]);

            modifiedText = modifiedText.slice(0, start_index) + cipher_text + modifiedText.slice(end_index);

            indexShift += cipher_text.length - plain_text.length;
        }

        const updatedHistory = await History.findOneAndUpdate(
            { id: id },
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
            {   
                new: true,
                upsert : true
             }
          );
        
          if (!updatedHistory) {
            return res.status(404).json({ error: 'User not found' });
          }
          await encryptKey(id, receiverIds);        
        res.status(200).json({ encryptedText: modifiedText, newIndex: newIndicesArray });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
}