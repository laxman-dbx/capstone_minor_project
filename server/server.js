const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const documentRoutes=require('./routes/documentRoutes.js')
const userRoutes = require("./routes/userRoutes");

const EncryptionRoute = require("./routes/encryption.js");
const DecryptionRoute = require("./routes/decryption.js");



dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use('/api/documents',documentRoutes)
app.use("/api/users", userRoutes);
app.use("/encrypt", EncryptionRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












// const express = require('express');
// const multer = require('multer');
// const maskImagePii = require('./Imagehandlers/maskImagePII'); // Ensure this function works correctly
// const fs = require('fs').promises;
// const path = require('path');

// const app = express();
// const port = 3000;

// // Configure multer for file uploads (store files in memory)
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('document'), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).send('No file uploaded.');
//         }

//         // Ensure directories exist
//         const uploadDir = path.join(__dirname, 'uploads');
//         const maskedUploadDir = path.join(__dirname, 'masked_uploads');
//         await fs.mkdir(uploadDir, { recursive: true });
//         await fs.mkdir(maskedUploadDir, { recursive: true });

//         // Save the original image
//         const originalFilePath = path.join(uploadDir, req.file.originalname);
//         await fs.writeFile(originalFilePath, req.file.buffer);
//         console.log(`Original file saved at: ${originalFilePath}`);

//         // Process the image for PII masking
//         const maskedFilePath = await maskImagePii(originalFilePath, maskedUploadDir);

//         if (!maskedFilePath) {
//             throw new Error('Masked image processing failed.');
//         }

//         console.log(`Masked file saved at: ${maskedFilePath}`);

//         // Send the masked image back to the client
//         res.status(201).send({
//             original: req.file.originalname,
//             masked: path.basename(maskedFilePath),
//             message: 'Masked image created successfully.'
//         });

//     } catch (error) {
//         console.error('Error processing document:', error);
//         res.status(500).send('Error processing document.');
//     }
// });



// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });




