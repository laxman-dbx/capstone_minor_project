const https = require("https"); // Use 'https' since the URL is HTTPS
const fs = require("fs");
require("dotenv").config();

async function extractDataPii(imagePath) {
  const image = fs.readFileSync(imagePath, { encoding: "base64" });
  const piiLocations = [];

  const options = {
    method: "POST",
    hostname: "detect.roboflow.com",
    path: "/projectad/6?api_key=5iYNtCTx136at7zLCkHt", // Combine path and query
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(image), //  Content-Length
    },
  };

  return new Promise((resolve, reject) => {
    // Wrap in a Promise
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          // Handle JSON parsing errors
          const response = JSON.parse(data);
          if (response.predictions && response.predictions.length > 0) {
            response.predictions.forEach((element) => {
              piiLocations.push({
                pattern: "other",
                text: "other",
                location: {
                  Left: element.x - element.width / 2,
                  Top: element.y - element.height / 2,
                  Width: element.width,
                  Height: element.height,
                },
              });
            });
            resolve(piiLocations);
          } else {
            resolve([]); // Resolve with an empty array
          }
        } catch (parseError) {
          reject(parseError); // Reject on parsing error
        }
      });
      res.on("error", (error) => {
        reject(error);
      });
    });

    req.on("error", (error) => {
      reject(error); // Reject on request error
    });

    req.write(image); // Send the image data
    req.end(); // End the request
  });
}

module.exports = extractDataPii;
