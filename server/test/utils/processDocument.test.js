let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { createWorker } = require("tesseract.js");

describe("processDocument - maskImagePII", () => {
  let maskImagePII;
  let sharpMock; // Will be a single, versatile mock
  let adhaarHandlerStub;
  let DrivingLicenseHandlerStub;
  let PANHandlerStub;
  let qrHandlerStub;
  let extractDataPiiStub;
  let consoleLogStub;
  let consoleErrorStub;
  let createWorkerStub;
  let recognizeStub;
  let terminateStub;
  let cryptoStub;

  beforeEach(() => {
    sharpMock = {
      extract: sinon.stub().returnsThis(),
      blur: sinon.stub().returnsThis(),
      composite: sinon.stub().resolvesThis(),
      toFile: sinon.stub().resolves(),
      toBuffer: sinon.stub().resolves(Buffer.from("mocked_buffer")),
    };

    const sharpFunc = sinon.stub().returns(sharpMock);

    adhaarHandlerStub = sinon.stub().resolves([
      {
        location: { Left: 10, Top: 20, Width: 30, Height: 40 },
        pattern: "AadharNumber",
      },
    ]);
    DrivingLicenseHandlerStub = sinon.stub().resolves([
      {
        location: { Left: 50, Top: 60, Width: 70, Height: 80 },
        pattern: "dl_no",
      },
    ]);
    PANHandlerStub = sinon.stub().resolves([
      {
        location: { Left: 90, Top: 100, Width: 110, Height: 120 },
        pattern: "panCard",
      },
    ]);
    qrHandlerStub = sinon
      .stub()
      .resolves([
        { location: { Left: 130, Top: 140, Width: 150, Height: 160 } },
      ]);
    extractDataPiiStub = sinon
      .stub()
      .resolves([
        { location: { Left: 170, Top: 180, Width: 190, Height: 200 } },
      ]);

    recognizeStub = sinon.stub().resolves({ data: { words: [] } }); // Mocked data
    terminateStub = sinon.stub().resolves();
    createWorkerStub = sinon.stub().resolves({
      recognize: recognizeStub,
      terminate: terminateStub,
    });

    //Mock crypto
    cryptoStub = {
      createHash: sinon.stub().returns({
        update: sinon.stub().returnsThis(),
        digest: sinon.stub().returns("hashed_pii_data"),
      }),
    };

    consoleLogStub = sinon.stub(console, "log");
    consoleErrorStub = sinon.stub(console, "error");

    maskImagePII = proxyquire("../../utils/Imagehandlers/processDocument", {
      // Adjust path
      sharp: sharpFunc, // Use the function mock
      "./AdhaarPII/aadharHandler": adhaarHandlerStub,
      "./drivingLPII/drivingLicenceHandler.js": DrivingLicenseHandlerStub,
      "./PanPII/panHandler": PANHandlerStub,
      "./QRdetect/qrHandler": qrHandlerStub,
      "./extractDataPii": extractDataPiiStub,
      "tesseract.js": { createWorker: createWorkerStub },
      crypto: cryptoStub,
    });
  });

  afterEach(() => {
    sinon.restore();
  });
  it("should successfully mask an Aadhar card", async () => {
    const imagePath = "test_aadhar.jpg";
    const maskedUploadDir = "masked_uploads";

    const { maskedFilePath, piiHash } = await maskImagePII(
      imagePath,
      maskedUploadDir,
      "adhaar",
    );

    expect(maskedFilePath).to.equal(
      path.join(maskedUploadDir, `masked_${path.basename(imagePath)}`),
    );
    expect(piiHash).to.equal("hashed_pii_data"); // Check hashed output
    expect(sharpMock.composite.calledOnce).to.be.true;
    expect(sharpMock.toFile.calledOnce).to.be.true;
    expect(adhaarHandlerStub.calledOnceWith(imagePath)).to.be.true;
    expect(qrHandlerStub.calledOnceWith(imagePath)).to.be.true;
  });

  it("should successfully mask a driving license", async () => {
    const imagePath = "test_dl.jpg";
    const maskedUploadDir = "masked_uploads";

    const { maskedFilePath, piiHash } = await maskImagePII(
      imagePath,
      maskedUploadDir,
      "driving_license",
    );

    expect(maskedFilePath).to.equal(
      path.join(maskedUploadDir, `masked_${path.basename(imagePath)}`),
    );
    expect(piiHash).to.equal("hashed_pii_data");
    expect(sharpMock.composite.calledOnce).to.be.true;
    expect(sharpMock.toFile.calledOnce).to.be.true;
    expect(DrivingLicenseHandlerStub.calledOnceWith(imagePath)).to.be.true;
    expect(qrHandlerStub.called).to.be.false;
  });

  it("should successfully mask a PAN card", async () => {
    const imagePath = "test_pan.jpg";
    const maskedUploadDir = "masked_uploads";

    const { maskedFilePath, piiHash } = await maskImagePII(
      imagePath,
      maskedUploadDir,
      "pan",
    );

    expect(maskedFilePath).to.equal(
      path.join(maskedUploadDir, `masked_${path.basename(imagePath)}`),
    );
    expect(piiHash).to.equal("hashed_pii_data");
    expect(sharpMock.composite.calledOnce).to.be.true;
    expect(sharpMock.toFile.calledOnce).to.be.true;
    expect(PANHandlerStub.calledOnceWith(imagePath)).to.be.true;
    expect(qrHandlerStub.calledOnceWith(imagePath)).to.be.true;
  });

  it("should handle an unknown document type", async () => {
    const imagePath = "test_other.jpg";
    const maskedUploadDir = "masked_uploads";

    const { maskedFilePath, piiHash } = await maskImagePII(
      imagePath,
      maskedUploadDir,
      "other",
    );

    expect(maskedFilePath).to.equal(
      path.join(maskedUploadDir, `masked_${path.basename(imagePath)}`),
    );
    expect(piiHash).to.equal(""); // No specific PII hash for 'other'
    expect(sharpMock.composite.calledOnce).to.be.true;
    expect(sharpMock.toFile.calledOnce).to.be.true;
    expect(extractDataPiiStub.calledOnceWith(imagePath)).to.be.true;
    expect(qrHandlerStub.calledOnceWith(imagePath)).to.be.true;
  });

  it("should return original image path if no PII or QR code is found", async () => {
    const imagePath = "test_no_pii.jpg";
    const maskedUploadDir = "masked_uploads";

    adhaarHandlerStub.resolves([]);
    qrHandlerStub.resolves([]);
    extractDataPiiStub.resolves([]);

    const { maskedFilePath, piiHash } = await maskImagePII(
      imagePath,
      maskedUploadDir,
      "adhaar",
    );

    expect(maskedFilePath).to.equal(undefined);
    expect(piiHash).to.equal("");
    expect(sharpMock.composite.notCalled).to.be.true; // Should not composite if no masking
    expect(sharpMock.toFile.notCalled).to.be.true; // Should not save a masked file
  });

  it("should handle errors during image processing", async () => {
    const imagePath = "test_image.jpg";
    const maskedUploadDir = "masked_uploads";
    const errorMessage = "Sharp error";

    sharpMock.composite.rejects(new Error(errorMessage)); // Simulate sharp error

    try {
      await maskImagePII(imagePath, maskedUploadDir, "adhaar");
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error.message).to.equal(errorMessage);
    }
  });

  it("should handle errors during PII detection", async () => {
    const imagePath = "test.jpg";
    const maskedUploadDir = "masked_uploads";
    const errorMessage = "PII detection failed";

    adhaarHandlerStub.rejects(new Error(errorMessage));

    try {
      await maskImagePII(imagePath, maskedUploadDir, "adhaar");
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error.message).to.equal(errorMessage);
    }
  });

  it("should handle null piiLocations and qrLocations", async () => {
    const imagePath = "test_image.jpg";
    const maskedUploadDir = "masked_uploads";

    adhaarHandlerStub.resolves(null);
    qrHandlerStub.resolves(null);
    try {
      await maskImagePII(imagePath, maskedUploadDir, "adhaar");
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error.message).to.equal("Error in PII or QR Code detection");
    }
  });
  it("should call extractAndHashAadharNumber with null piiLoc", async () => {
    const imagePath = "test_image.jpg";
    const maskedUploadDir = "masked_uploads";

    adhaarHandlerStub.resolves([
      {
        location: { Left: 50, Top: 75, Width: 100, Height: 25 },
        pattern: "some_other_pattern",
      },
    ]);
    qrHandlerStub.resolves([
      {
        location: { Left: 50, Top: 75, Width: 100, Height: 25 },
        pattern: "some_other_pattern",
      },
    ]);
    extractDataPiiStub.resolves([
      {
        location: { Left: 50, Top: 75, Width: 100, Height: 25 },
        pattern: "some_other_pattern",
      },
    ]);

    const result = await maskImagePII(imagePath, maskedUploadDir, "adhaar");

    expect(consoleErrorStub.calledWith("pii location not found!"));
  });
});
