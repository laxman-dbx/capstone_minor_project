// https://universe.roboflow.com/priyam-jqjjb/priyam-adhar-detect
const axios = require('axios');
const fs = require('fs');
require("dotenv").config();

/**
 * Process an Adhaar card image and detect PII regions
 * @param {string} imagePath - Path to the image file
 * @returns {Array} Array of PII locations
 */
async function adhaarHandler(imagePath) {
    try {
        // Read image file as base64
        const image = fs.readFileSync(imagePath, {
            encoding: "base64"
        });
        
        // Define which class IDs are considered PII
        const piiClassIds = [
            8,  // AadharNumber
            9,  // AadharUAIDI
            0,  // AadharAddress
            2,  // AadharDOB
            // Add other PII class IDs as needed
        ];
        
        // Call Roboflow API for object detection
        const response = await axios({
            method: "POST",
            url: "https://detect.roboflow.com/priyam-adhar-detect/3",
            params: {
                api_key: process.env.QR_API_KEY
            },
            data: image,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        // Initialize PII locations array
        const piiLocations = [];
        
        // Check if predictions exist
        if (response.data.predictions && response.data.predictions.length > 0) {
            // Process each prediction
            response.data.predictions.forEach(element => {
                // Include only PII fields (exclude emblem and card images)
                if (piiClassIds.includes(element.class_id)) {
                    // Calculate the bounding box coordinates
                    const left = element.x - (element.width / 2);
                    const top = element.y - (element.height / 2);
                    
                    // Add to PII locations with specific label based on class
                    piiLocations.push({
                        pattern: element.class, // Use the class name from the API
                        text: getPIILabel(element.class), // Get a human-readable label
                        confidence: element.confidence,
                        location: {
                            Left: left,
                            Top: top,
                            Width: element.width,
                            Height: element.height
                        }
                    });
                }
            });
            
            return piiLocations;
        } else {
            console.log("No Adhaar card elements detected");
            return [];
        }
    } catch (error) {
        console.error("Error processing Adhaar card:", error.message);
        return [];
    }
}

/**
 * Helper function to get a more descriptive label for the PII type
**/
function getPIILabel(className) {
    switch(className) {
        case 'AadharNumber':
            return 'Aadhar Number';
        case 'AadharUAIDI':
            return 'Unique ID';
        case 'AadharAddress':
            return 'Address';
        case 'AadharDOB':
            return 'Date of Birth';
        case 'AadharGOI':
            return 'Government ID';
        default:
            return className;
    }
}

module.exports = adhaarHandler;