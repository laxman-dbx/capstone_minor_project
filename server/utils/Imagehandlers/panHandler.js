// https://detect.roboflow.com/testprojectp/5

// https://universe.roboflow.com/priyam-jqjjb/pan-detect/dataset/3

// https://universe.roboflow.com/pk-btgjw/pan-extraction/model/1

// https://universe.roboflow.com/homevilleai/pandetection

// https://universe.roboflow.com/pan-cards/pan-cards-doird


const axios = require('axios');
const fs = require('fs');
require("dotenv").config();

/**
 * Process an PAN card image and detect PII regions
 * @param {string} imagePath - Path to the image file
 * @returns {Array} Array of PII locations
 */

async function PANHandler(imagePath) {
    try {
        // Read image file as base64
        const image = fs.readFileSync(imagePath, {
            encoding: "base64"
        });
        
        // Call Roboflow API for object detection
        const response = await axios({
            method: "POST",
            url: "https://detect.roboflow.com/pan-extraction-asozf/1",
            params: {
                api_key: process.env.ROBOFLOW_API_KEY
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

                // Calculate the bounding box coordinates
                const left = element.x - (element.width / 2);
                const top = element.y - (element.height / 2);
                
                // Add to PII locations with specific label based on class
                piiLocations.push({
                    pattern: element.class, // Use the class name from the API
                    text: 'PAN', // Get a human-readable label
                    confidence: element.confidence,
                    location: {
                        Left: left,
                        Top: top,
                        Width: element.width,
                        Height: element.height
                    }
                });
            });
            
            return piiLocations;
        } else {
            console.log("No PAN card elements detected");
            return [];
        }
    } catch (error) {
        console.error("Error processing PAN card:", error.message);
        return [];
    }
}

module.exports=PANHandler;