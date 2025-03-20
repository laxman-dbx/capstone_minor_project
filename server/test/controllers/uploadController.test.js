// test/controllers/uploadController.test.js
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const { s3 } = require("../../config/aws");
const fs = require("fs");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const Document = require("../../models/Document");
const { logActivity } = require("../../utils/activityLogger");
const proxyquire = require("proxyquire");

describe("Upload Controller", () => {
  let req, res, next;
  let uploadController;
  let maskImagePIIStub;
  let pdfToJpgConverterStub;
  let logActivityStub;

  beforeEach(() => {
    req = { userId: "testUserId", body: {}, file: null };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
      setHeader: sinon.stub().returnsThis(),
      send: sinon.stub(),
    };
    next = sinon.stub();

    // Create stubs for the external dependencies
    maskImagePIIStub = sinon.stub();
    pdfToJpgConverterStub = sinon.stub();
    logActivityStub = sinon.stub();

    // Use proxyquire to inject the stubs into the controller
    uploadController = proxyquire("../../controllers/uploadController", {
      "../utils/Imagehandlers/processDocument": maskImagePIIStub,
      "../utils/PdfHandlers/pdftojpg": pdfToJpgConverterStub,
      "../utils/activityLogger": { logActivity: logActivityStub }, // Correctly stub logActivity
    });
  });

  afterEach(() => {
    sinon.restore();
    // Clear the require cache to avoid issues between tests
    delete require.cache[require.resolve("../../controllers/uploadController")];
  });

  const setupMockFile = (overrides = {}) => {
    return {
      path: "test/fixtures/test-file.jpg",
      originalname: "test-file.jpg",
      mimetype: "image/jpeg",
      size: 1024,
      filename: "test-file-12345.jpg",
      ...overrides,
    };
  };

  describe("uploadDocument", () => {
    it("should upload and mask a document and save it", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { documentType: "adhaar", isSave: "true" };
      const maskedFilePath = "masked_uploads/masked-test-file.jpg";
      const piiHash = "piiHashValue";

      maskImagePIIStub.resolves({ maskedFilePath, piiHash });
      pdfToJpgConverterStub.resolves(["test/fixtures/test-file.jpg"]);
      logActivityStub.resolves(); // Ensure logActivity stub resolves

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();
      sinon.stub(fs, "createReadStream").returns({});
      const s3SendStub = sinon.stub(s3, "send");
      s3SendStub.withArgs(sinon.match.instanceOf(PutObjectCommand)).resolves();
      sinon.stub(Document.prototype, "save").resolves({ _id: "docId" });

      await uploadController.uploadDocument(req, res);

      expect(maskImagePIIStub.calledOnce).to.be.true;
      expect(s3SendStub.calledOnce).to.be.true;
      expect(s3SendStub.args[0][0] instanceof PutObjectCommand).to.be.true;
      expect(Document.prototype.save.calledOnce).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "File uploaded & masked successfully",
          fileUrl: req.file.filename,
        }),
      ).to.be.true;
      expect(logActivityStub.calledOnce).to.be.true; // Use the stub here
      expect(unlinkSyncStub.callCount).to.equal(3);
    });

    it("should handle no PII found and return isNoPII", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { documentType: "adhaar", isSave: "true" };

      maskImagePIIStub.resolves({
        maskedFilePath: mockFile.path,
        piiHash: null,
      });
      pdfToJpgConverterStub.resolves(["test/fixtures/test-file.jpg"]);

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.uploadDocument(req, res);

      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "No PII data found in the document",
          isNoPII: true,
        }),
      ).to.be.true;
      expect(logActivityStub.notCalled).to.be.true;
      expect(unlinkSyncStub.calledOnce).to.be.true; // unlinkSync should be called once (processedFilePath)
    });

    it("should return masked file directly if isSave is false", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { documentType: "adhaar", isSave: "false" };
      const maskedFilePath = "masked_uploads/masked-test-file.jpg";
      const mockFileBuffer = Buffer.from("masked file content");

      maskImagePIIStub.resolves({ maskedFilePath, piiHash: "someHash" });
      pdfToJpgConverterStub.resolves(["test/fixtures/test-file.jpg"]);

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();
      sinon.stub(fs, "readFileSync").returns(mockFileBuffer);

      const nextTickStub = sinon
        .stub(process, "nextTick")
        .callsFake((fn) => fn());

      await uploadController.uploadDocument(req, res);

      expect(res.setHeader.calledWith("Content-Type", "image/jpeg")).to.be.true;
      expect(
        res.setHeader.calledWith(
          "Content-Disposition",
          `inline; filename="${req.file.filename}"`,
        ),
      ).to.be.true;
      expect(res.send.calledOnceWith(mockFileBuffer)).to.be.true;
    });

    it("should handle file size too large", async () => {
      const mockFile = setupMockFile({ size: 11 * 1024 * 1024 }); // 11MB
      req.file = mockFile;
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.uploadDocument(req, res);

      expect(res.status.calledOnceWith(413)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "File size too large. Maximum size is 10MB",
        }),
      ).to.be.true;
      expect(unlinkSyncStub.calledOnce).to.be.true;
    });

    it("should handle invalid file type", async () => {
      const mockFile = setupMockFile({ mimetype: "text/plain" });
      req.file = mockFile;
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.uploadDocument(req, res);

      expect(res.status.calledOnceWith(415)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message:
            "Invalid file type. Only JPEG, PNG and PDF files are allowed",
        }),
      ).to.be.true;
      expect(unlinkSyncStub.calledOnce).to.be.true;
    });

    it("should handle missing document type", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { isSave: "true" }; // No documentType
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.uploadDocument(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
      expect(res.json.calledOnceWith({ message: "Document type is required" }))
        .to.be.true;
      expect(unlinkSyncStub.calledOnce).to.be.true;
    });

    it("should handle PDF conversion failure", async () => {
      const mockFile = setupMockFile({ mimetype: "application/pdf" });
      req.file = mockFile;
      req.body = { documentType: "adhaar", isSave: "true" };

      pdfToJpgConverterStub.resolves(null); // Simulate conversion failure

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.uploadDocument(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.args[0][0]).to.have.property(
        "error",
        "Failed to process document",
      );
    });

    it("should handle errors during masking", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { documentType: "adhaar", isSave: "true" };

      maskImagePIIStub.rejects(new Error("Masking error"));
      pdfToJpgConverterStub.resolves(["test/fixtures/test-file.jpg"]);

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.uploadDocument(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.args[0][0]).to.have.property(
        "error",
        "Failed to process document",
      );
    });

    it("should handle errors in the outer try block", async () => {
      req.file = null; // No file provided

      await uploadController.uploadDocument(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
      expect(res.json.calledOnceWith({ message: "No file uploaded" })).to.be
        .true;
    });
  });

  describe("publicUploadDocument", () => {
    it("should upload and mask a document (public)", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { documentType: "adhaar" };
      const maskedFilePath = "masked_uploads/masked-test-file.jpg";
      const mockFileBuffer = Buffer.from("masked file content");

      maskImagePIIStub.resolves({ maskedFilePath, piiHash: "someHash" });
      pdfToJpgConverterStub.resolves(["test/fixtures/test-file.jpg"]);

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();
      sinon.stub(fs, "readFileSync").returns(mockFileBuffer);

      const nextTickStub = sinon
        .stub(process, "nextTick")
        .callsFake((fn) => fn());

      await uploadController.publicUploadDocument(req, res);

      expect(res.setHeader.calledWith("Content-Type", "image/jpeg")).to.be.true;
      expect(
        res.setHeader.calledWith(
          "Content-Disposition",
          `inline; filename="${req.file.filename}"`,
        ),
      ).to.be.true;
      expect(res.send.calledOnceWith(mockFileBuffer)).to.be.true;
    });

    it("should handle no PII found (public)", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { documentType: "adhaar" };

      maskImagePIIStub.resolves({
        maskedFilePath: mockFile.path,
        piiHash: null,
      });

      sinon.stub(fs, "existsSync").returns(true);
      sinon.stub(fs, "unlinkSync").returns();
      await uploadController.publicUploadDocument(req, res);

      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "No PII data found in the document",
          isNoPII: true,
        }),
      ).to.be.true;
    });

    it("should handle file size too large", async () => {
      const mockFile = setupMockFile({ size: 11 * 1024 * 1024 }); // 11MB
      req.file = mockFile;
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.publicUploadDocument(req, res);

      expect(res.status.calledOnceWith(413)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "File size too large. Maximum size is 10MB",
        }),
      ).to.be.true;
      expect(unlinkSyncStub.calledOnce).to.be.true;
    });

    it("should handle invalid file type", async () => {
      const mockFile = setupMockFile({ mimetype: "text/plain" });
      req.file = mockFile;
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.publicUploadDocument(req, res);

      expect(res.status.calledOnceWith(415)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message:
            "Invalid file type. Only JPEG, PNG and PDF files are allowed",
        }),
      ).to.be.true;
      expect(unlinkSyncStub.calledOnce).to.be.true;
    });

    it("should handle missing document type", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = {}; // No documentType
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.publicUploadDocument(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
      expect(res.json.calledOnceWith({ message: "Document type is required" }))
        .to.be.true;
      expect(unlinkSyncStub.calledOnce).to.be.true;
    });

    it("should handle PDF conversion failure", async () => {
      const mockFile = setupMockFile({ mimetype: "application/pdf" });
      req.file = mockFile;
      req.body = { documentType: "adhaar" };

      pdfToJpgConverterStub.resolves(null); // conversion failure

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.publicUploadDocument(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.args[0][0]).to.have.property(
        "error",
        "Failed to process document",
      );
    });

    it("should handle errors during masking", async () => {
      const mockFile = setupMockFile();
      req.file = mockFile;
      req.body = { documentType: "adhaar" };

      maskImagePIIStub.rejects(new Error("Masking error"));
      pdfToJpgConverterStub.resolves(["test/fixtures/test-file.jpg"]);

      sinon.stub(fs, "existsSync").returns(true);
      const unlinkSyncStub = sinon.stub(fs, "unlinkSync").returns();

      await uploadController.publicUploadDocument(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.args[0][0]).to.have.property(
        "error",
        "Failed to process document",
      );
    });

    it("should handle errors in the outer try block", async () => {
      req.file = null; // No file provided

      await uploadController.publicUploadDocument(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
      expect(res.json.calledOnceWith({ message: "No file uploaded" })).to.be
        .true;
    });
  });
});
