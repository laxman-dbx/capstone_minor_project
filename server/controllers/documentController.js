const {DeleteObjectCommand,GetObjectCommand }=require('@aws-sdk/client-s3')
const { s3 } = require('../config/aws');
const Document = require('../models/Document');

const getUserDocuments = async (req, res) => {
    try {
        const userId = req.userId; // Assuming authentication middleware sets req.user
        const documents = await Document.find({ userId });

        res.json({ documents });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const downloadDocument = async (req, res) => {
    try {
        const { fileKey } = req.params;
        const userId = req.userId; 

        // Find the document in DB
        const document = await Document.findOne({ userId, originalName: fileKey });
        if (!document) {
            return res.status(404).json({ error: "File not found" });
        }

        const maskedFilename=document.maskedFileName;
        // Retrieve file from S3
        const getCommand = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `masked/${maskedFilename}`
        });

        const { Body } = await s3.send(getCommand);

        // Set original file name for download
        res.attachment(document.originalName); 
        Body.pipe(res);
    } catch (err) {
        res.status(500).json({ error: "File not found" });
    }
};


const deleteDocument = async (req, res) => {
    try {
        const { fileKey } = req.params;
        const userId = req.userId;

        // Find the document in the database
        const document = await Document.findOne({ userId, originalName: fileKey });

        if (!document) {
            return res.status(404).json({ error: "File not found" });
        }

        const maskedFilename=document.maskedFileName;
        // Delete the file from S3
        const deleteCommand = new DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `masked/${maskedFilename}`
        });

        await s3.send(deleteCommand);

        // Remove document entry from MongoDB
        await Document.deleteOne({ _id: document._id });

        res.json({ message: "File deleted successfully" });

    } catch (err) {
        console.error("Delete error:", err);
        res.status(500).json({ error: "Error deleting file" });
    }
};




module.exports = { getUserDocuments,downloadDocument, deleteDocument };
