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

        const { documentType, isSave } = req.body;
        console.log({ documentType, isSave });
        const filePath = req.file.path;
        let processedFilePath;

        // Convert PDF to JPG before masking
        if (req.file.mimetype === 'application/pdf') {
            const imagePath = await pdfToJpgConverter(filePath);
            processedFilePath=imagePath[0];
        } else {
            processedFilePath = filePath;
        }

        console.log(processedFilePath);
        // Mask PII Data
        const maskedFilePath = await maskImagePII(processedFilePath, 'masked_uploads/',documentType);

        if (isSave === "true" || isSave === true) {
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
            if (processedFilePath !== filePath) {
                fs.unlinkSync(processedFilePath); // Clean up converted file if necessary
            }
            fs.unlinkSync(maskedFilePath);

            const newDocument = new Document({
                userId: req.userId,
                documentType,
                originalName: req.file.originalname,
                maskedFileName: req.file.filename,
                maskedUrl: result.Location
            });

            await newDocument.save();
            return res.json({ message: "File uploaded & masked successfully", fileUrl: req.file.filename });

        } else {
            // Read the masked file as a buffer
            const fileBuffer = fs.readFileSync(maskedFilePath);
            const contentType = req.file.mimetype.startsWith('image') ? req.file.mimetype : 'image/jpeg';

            // Set response headers for file download
            res.setHeader('Content-Type', contentType);
            res.setHeader('Content-Disposition', `inline; filename="${req.file.filename}"`);

            // Send the image blob
            res.send(fileBuffer);

            // Clean up files after response has been sent
            process.nextTick(() => {
                try {
                    fs.unlinkSync(filePath);
                    if (processedFilePath !== filePath) {
                        fs.unlinkSync(processedFilePath); // Clean up converted file if necessary
                    }
                    fs.unlinkSync(maskedFilePath);
                } catch (cleanupErr) {
                    console.error('Error cleaning up files:', cleanupErr);
                }
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};




module.exports = { uploadDocument};
