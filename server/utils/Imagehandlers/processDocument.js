const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const extractTextAndPII = require('./extractText'); 
const extractQRPii = require('./extractQR'); 
const extractDataPii = require('./extractDataPii');

async function maskImagePII(imagePath, maskedUploadDir) {
    try {
        const startTime=Date.now();
        // Run metadata extraction and PII/QR detection in parallel
        const [metadata, piiLocations, qrLocations] = await Promise.all([
            sharp(imagePath).metadata(),
            extractDataPii(imagePath),
            extractQRPii(imagePath)
        ]);

        // console.log('PII Locations:', piiLocations);
        // console.log('QR Locations:', qrLocations);

        let allSensitiveLocations = [];

        // Combine PII and QR Code locations
        if(!piiLocations && !qrLocations){
            throw new Error('Error in PII or QR Code detection');
        }
        else if(!piiLocations){
             allSensitiveLocations = [...qrLocations];
        }
        else if(!qrLocations){
             allSensitiveLocations = [...piiLocations];
        }
        else{
             allSensitiveLocations = [...piiLocations, ...qrLocations];
        }

        if (allSensitiveLocations.length > 0) {
            const maskSvg = `
                <svg width="${metadata.width}" height="${metadata.height}" xmlns="http://www.w3.org/2000/svg">
                    ${allSensitiveLocations.map(pii => 
                        `<rect x="${pii.location.Left}" y="${pii.location.Top}" 
                               width="${pii.location.Width}" height="${pii.location.Height}" 
                               fill="black"/>`
                    ).join('')}
                </svg>
            `;

            const image = sharp(imagePath)
                .composite([{ input: Buffer.from(maskSvg), blend: 'over' }]);

            // Save masked image
            const maskedFilePath = path.join(maskedUploadDir, `masked_${path.basename(imagePath)}`);
            await image.toFile(maskedFilePath);
            console.log('file processing time:',Date.now()-startTime)
            
            return maskedFilePath;
        }

        return imagePath; // Return original path if no masking is needed

    } catch (error) {
        console.error('Error masking image:', error);
        throw error;
    }
}

// maskImagePII("/home/laxman.v/Documents/Document-Management-System/uploads/sample3.jpg","masked_uploads")
module.exports = maskImagePII;
