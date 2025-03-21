const user = require("../models/User");
const dataModel = require("../models/dataReceiver");
const { PythonShell } = require("python-shell");

async function encryptKey(key, enc, ind, senderId, receiverIds) {
  try {
    const aesKeyBase64 = key;
    const encryptedText = enc;
    const indices = ind;

    const receivers = await user.find(
      { _id: { $in: receiverIds } },
      { _id: 1, publicKey: 1 },
    );

    if (receivers.length === 0) {
      return { error: "No valid receivers found" };
    }

    const encryptedReceivers = [];

    for (const receiver of receivers) {
      const options = {
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

module.exports = { encryptKey };
