// https://universe.roboflow.com/chinmoy/driving-license-project

// https://universe.roboflow.com/kevinmarcelino/redharvest

// https://universe.roboflow.com/class-4n5va/driving_license-08fcm

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
/**
 * Process a Driving License image and detect PII regions
 * @param {string} imagePath - Path to the image file
 * @returns {Array} Array of PII locations
 */
function DrivingLicenseHandler(imagePath) {
  return new Promise((resolve, reject) => {
    try {
      const scriptPath = path.resolve(__dirname, "detect_pii.py");
      const absoluteImagePath = path.resolve(imagePath);
      const outputPath = path.resolve(__dirname, "output.json");

      console.log(`Detecting PII in: ${absoluteImagePath}`);
      console.log(`Using script: ${scriptPath}`);

      // Run Python script synchronously
      const result = spawnSync("python3", [scriptPath, absoluteImagePath], {
        encoding: "utf-8",
      });

      console.log("Python script executed successfully");

      // Handle errors
      if (result.error) {
        console.error("Execution error:", result.error.message);
        return reject(
          new Error(`Python script execution failed: ${result.error.message}`),
        );
      }
      if (result.stderr) {
        console.error("Python script stderr:", result.stderr);
      }

      // Ensure output.json exists before reading
      if (!fs.existsSync(outputPath)) {
        return reject(new Error("output.json was not generated"));
      }

      // Read and parse output.json
      const data = fs.readFileSync(outputPath, "utf8");
      const jsonData = JSON.parse(data);

      resolve(jsonData.masked_pii);
    } catch (err) {
      console.error("Error:", err);
      reject(new Error("Unexpected error in adhaarHandler"));
    }
  });
}

module.exports = DrivingLicenseHandler;
