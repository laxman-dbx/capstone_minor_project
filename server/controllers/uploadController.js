const multer = require('multer');
const { s3 } = require('../config/aws');
const fs = require('fs');
const maskImagePII = require('../utils/Imagehandlers/processDocument');
const pdfToJpgConverter = require('../utils/PdfHandlers/pdftojpg');
const { PutObjectCommand} = require("@aws-sdk/client-s3");
const Document=require('../models/Document')


const uploadDocument = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No file uploaded" });

        const filePath = req.file.path;
        let processedFilePath;

        // Convert PDF to JPG before masking
        if (req.file.mimetype === 'application/pdf') {
            processedFilePath = await pdfToJpgConverter(filePath);
        } else {
            processedFilePath = filePath;
        }

        // Mask PII Data
        const maskedFilePath = await maskImagePII(processedFilePath, 'masked_uploads/');

        // Upload masked file to S3
        const fileStream = fs.createReadStream(maskedFilePath);
        const uploadParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `masked/${req.file.filename}`,
            Body: fileStream,
            ContentType: req.file.mimetype
        };

        const command = new PutObjectCommand(uploadParams);

        const result = await s3.send(command);

        // Clean up local files
        fs.unlinkSync(filePath);
        fs.unlinkSync(maskedFilePath);

        const newDocument = new Document({
            userId: req.userId, // Assuming user is authenticated and req.user contains user info
            originalName: req.file.originalname,
            maskedFileName: req.file.filename,
            maskedUrl: result.Location
        });

        await newDocument.save();
        
        res.json({ message: "File uploaded & masked successfully", fileUrl: req.file.filename});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};



module.exports = { uploadDocument};
