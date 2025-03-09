const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    profileImage: { type: String },
    publicKey:{type:String},
    privateKey:{type:String, select: false},
    data: [{
        key: { type: String },
        indices: {
            type: [[Number]],
            required: true,
        },
        encryptedText: { type: String },
        receiverDetails: [{
            receiverId : { type: mongoose.Schema.Types.ObjectId, ref : "User"},
        }],
    }]
  },

  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("privateKey") || !this.privateKey) return next();

  const encryptionKey = process.env.PRIVATE_KEY_ENCRYPTION_KEY;
  if (!encryptionKey) throw new Error("Missing encryption key");

  const iv = crypto.randomBytes(16); // Generate a random IV
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(encryptionKey, "hex"),
    iv
  );

  let encrypted = cipher.update(this.privateKey, "utf8", "hex");
  encrypted += cipher.final("hex");

  this.privateKey = iv.toString("hex") + encrypted; // Store IV + encrypted data
  next();
});

userSchema.methods.getDecryptedPrivateKey = function () {
  if (!this.privateKey) return null;

  const encryptionKey = process.env.PRIVATE_KEY_ENCRYPTION_KEY;
  if (!encryptionKey) throw new Error("Missing encryption key");

  const iv = Buffer.from(this.privateKey.substring(0, 32), "hex"); // Extract IV
  const encryptedData = this.privateKey.substring(32);

  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(encryptionKey, "hex"),
    iv
  );

  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};

module.exports = mongoose.model("User", userSchema);
