const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    profileImage: { type: String }, // Store image path
    publicKey:{type:String},
    privateKey:{type:String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
