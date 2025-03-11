const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const extractTextAndPII = require('./extractText'); 
const qrHandler = require('./QRdetect/qrHandler'); 
const extractDataPii = require('./extractDataPii');
const adhaarHandler = require('./AdhaarPII/aadharHandler');
const DrivingLicenseHandler = require('./drivingLicenceHandler');
const PANHandler = require('./PanPII/panHandler');

async function maskImagePII(imagePath, maskedUploadDir,documentType) {
    try {
        const startTime=Date.now();
        let metadata,piiLocations,qrLocations;
        if(documentType==='adhaar'){
            [metadata, piiLocations, qrLocations] = await Promise.all([
                sharp(imagePath).metadata(),
                adhaarHandler(imagePath),
                qrHandler(imagePath)
            ]);
        }
        else if(documentType==='driving_license'){
            [metadata, piiLocations] = await Promise.all([
                sharp(imagePath).metadata(),
                DrivingLicenseHandler(imagePath),
            ]);
        }
        else if(documentType==='pan'){
            [metadata, piiLocations, qrLocations] = await Promise.all([
                sharp(imagePath).metadata(),
                PANHandler(imagePath),
                qrHandler(imagePath)
            ]);
        }
        else{
            // Run metadata extraction and PII/QR detection in parallel
            [metadata, piiLocations, qrLocations] = await Promise.all([
                sharp(imagePath).metadata(),
                extractDataPii(imagePath),
                qrHandler(imagePath)
            ]);
        }

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
        console.log(allSensitiveLocations);

        if (allSensitiveLocations.length > 0) {
            try {
                const image = sharp(imagePath);
                
                // Prepare blur masks
                const blurMasks = await Promise.all(allSensitiveLocations.map(async (pii) => {
                    // Extract the specific region from the original image
                    const regionBuffer = await sharp(imagePath)
                        .extract({
                            left: pii.location.Left,
                            top: pii.location.Top,
                            width: pii.location.Width,
                            height: pii.location.Height
                        })
                        .blur(10)  // Apply blur to this specific region
                        .toBuffer();
        
                    return {
                        input: regionBuffer,
                        top: pii.location.Top,
                        left: pii.location.Left,
                        blend: 'over'
                    };
                }));
        
                // Composite the blurred masks onto the original image
                const maskedImage = await image.composite(blurMasks);
        
                // Save masked image
                const maskedFilePath = path.join(maskedUploadDir, `masked_${path.basename(imagePath)}`);
                await maskedImage.toFile(maskedFilePath);
                
                console.log('file processing time:', Date.now() - startTime);
                
                return maskedFilePath;
            } catch (error) {
                console.error('Error masking image:', error);
                throw error;
            }
        }

        return imagePath; // Return original path if no masking is needed

    } catch (error) {
        console.error('Error masking image:', error);
        throw error;
    }
}

// maskImagePII("/home/laxman.v/Documents/Document-Management-System/uploads/sample3.jpg","masked_uploads")
module.exports = maskImagePII;
