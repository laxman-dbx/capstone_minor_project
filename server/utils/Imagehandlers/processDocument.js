const sharp = require("sharp");
const path = require("path");
const qrHandler = require("./QRdetect/qrHandler");
const extractDataPii = require("./extractDataPii");
const adhaarHandler = require("./AdhaarPII/aadharHandler");
const DrivingLicenseHandler = require("./drivingLPII/drivingLicenceHandler.js");
const PANHandler = require("./PanPII/panHandler");
const { createWorker } = require("tesseract.js");
const crypto = require("crypto");

async function extractAndHashAadharNumber(imagePath, piiLoc) {
  if (!piiLoc) {
    return;
  }

  const { Left, Top, Width, Height } = piiLoc.location;

  const worker = await createWorker();

  const { data } = await worker.recognize(imagePath, "eng");
  const filteredWords = data.words.filter((word) => {
    const { x0, y0, x1, y1 } = word.bbox; // Bounding box of detected word
    return (
      x0 >= Left &&
      x1 <= Left + Width && // X-axis within range
      y0 >= Top &&
      y1 <= Top + Height // Y-axis within range
    );
  });

  // Extract and clean Aadhaar Number text
  const piiNumber = filteredWords.map((word) => word.text).join(""); // Keep only digits

  await worker.terminate();

  const piiHash = crypto.createHash("sha256").update(piiNumber).digest("hex");

  return piiHash;
}

async function maskImagePII(imagePath, maskedUploadDir, documentType) {
  try {
    const worker = await createWorker();
    const { data } = await worker.recognize(imagePath);
    const startTime = Date.now();
    let piiLocations, qrLocations;
    if (documentType === "adhaar") {
      [piiLocations, qrLocations] = await Promise.all([
        adhaarHandler(imagePath),
        qrHandler(imagePath),
      ]);
    } else if (documentType === "driving_license") {
      [piiLocations] = await Promise.all([DrivingLicenseHandler(imagePath)]);
    } else if (documentType === "pan") {
      [piiLocations, qrLocations] = await Promise.all([
        PANHandler(imagePath),
        qrHandler(imagePath),
      ]);
    } else {
      // Run metadata extraction and PII/QR detection in parallel
      [piiLocations, qrLocations] = await Promise.all([
        extractDataPii(imagePath),
        qrHandler(imagePath),
      ]);
    }

    let allSensitiveLocations = [];

    if (!piiLocations && !qrLocations) {
      throw new Error("Error in PII or QR Code detection");
    } else if (!piiLocations) {
      allSensitiveLocations = [...qrLocations];
    } else if (!qrLocations) {
      allSensitiveLocations = [...piiLocations];
    } else {
      allSensitiveLocations = [...piiLocations, ...qrLocations];
    }

    //process for generating Hashes for the pii data
    //AaDdharNumber
    //dl_no
    //panCard

    let piiHash = "";
    if (allSensitiveLocations.length > 0) {
      if (documentType === "adhaar") {
        const piiLoc = allSensitiveLocations.find(
          (loc) => loc.pattern === "AadharNumber",
        );
        piiHash = await extractAndHashAadharNumber(imagePath, piiLoc);
      } else if (documentType === "driving_license") {
        const piiLoc = allSensitiveLocations.find(
          (loc) => loc.pattern === "dl_no",
        );
        piiHash = await extractAndHashAadharNumber(imagePath, piiLoc);
      } else if (documentType === "pan") {
        const piiLoc = allSensitiveLocations.find(
          (loc) => loc.pattern === "panCard",
        );
        piiHash = await extractAndHashAadharNumber(imagePath, piiLoc);
      }

      try {
        const image = sharp(imagePath);

        // Prepare blur masks
        const blurMasks = await Promise.all(
          allSensitiveLocations.map(async (pii) => {
            // Extract the specific region from the original image
            const regionBuffer = await sharp(imagePath)
              .extract({
                left: pii.location.Left,
                top: pii.location.Top,
                width: pii.location.Width,
                height: pii.location.Height,
              })
              .blur(20) // Apply blur to this specific region
              .toBuffer();

            return {
              input: regionBuffer,
              top: pii.location.Top,
              left: pii.location.Left,
              blend: "over",
            };
          }),
        );

        // Composite the blurred masks onto the original image
        const maskedImage = await image.composite(blurMasks);

        // Save masked image
        const maskedFilePath = path.join(
          maskedUploadDir,
          `masked_${path.basename(imagePath)}`,
        );
        await maskedImage.toFile(maskedFilePath);

        return { maskedFilePath, piiHash };
      } catch (error) {
        throw error;
      }
    }

    return { imagePath, piiHash }; // Return original path if no masking is needed
  } catch (error) {
    throw error;
  }
}

module.exports = maskImagePII;
