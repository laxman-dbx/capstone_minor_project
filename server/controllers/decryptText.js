const EncryptedMessage = require("../models/dataReceiver");
const { decryptKey } = require("./decryptKey");
const { decrypt } = require("../utils/decryption/decrypt-text");
const { logActivity } = require("../utils/activityLogger");
const { createNotification } = require("../utils/notificationManager");

exports.decryptText = async (req, res) => {
  const receiverId = req.userId;
  const dataId = req.body.dataId;

  try {
    const Details = await EncryptedMessage.findById(dataId);

    if (Details.length === 0) {
      return res
        .status(404)
        .json({ error: "Encrypted message not found for these users" });
    }

    const encryptedText = Details.encryptedText;
    const newIndex = Details.indices;
    const decryptedKey = await decryptKey(dataId, receiverId);
    const key = decryptedKey.decryptedAesKeyBase64;
    let modifiedText = encryptedText;
    let indexShift = 0;
    for (let i = 0; i < newIndex.length; i++) {
      let [start_index, end_index] = newIndex[i];
      start_index += indexShift;
      end_index += indexShift;

      const cipherText = modifiedText.slice(start_index, end_index);

      const plainText = decrypt(cipherText, key);

      if (!plainText) {
        return res
          .status(500)
          .json({ error: "Decryption failed for part of the message" });
      }
      modifiedText =
        modifiedText.slice(0, start_index) +
        plainText +
        modifiedText.slice(end_index);

      indexShift += plainText.length - cipherText.length;
    }

    // Log the decryption activity
    await logActivity(receiverId, "decrypt", `Decrypted shared text`, {
      textId: dataId,
      metadata: {
        encryptedEntities: newIndex.length,
        textLength: modifiedText.length,
      },
    });
    if (Details.userId !== req.userId) {
      await createNotification(
        Details.userId,
        "Your message was decrypted",
        "message_decrypted",
        { messageId: Details._id },
      );
    }

    res.json({ text: modifiedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during decryption" });
  }
};
