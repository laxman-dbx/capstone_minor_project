const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
    documentType: { 
        type: String, 
        enum: ['adhaar', 'pan', 'driving_license', 'other', 'bank'],
        default: 'other'
    },
    originalName: String,  // Original filename
    maskedFileName: String,
    maskedUrl: String,     // S3 or storage URL of the masked document
    uploadedAt: { type: Date, default: Date.now } // Timestamp of upload
});

module.exports = mongoose.model("Document", documentSchema);