// test/controllers/documentController.test.js
const sinon = require("sinon");
const { s3 } = require("../../config/aws");
const { DeleteObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const proxyquire = require("proxyquire");

let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});

describe("Document Controller", () => {
  let req, res, next;
  let documentController;
  let DocumentStub;
  let logActivityStub;

  beforeEach(() => {
    req = { userId: "testUserId", params: {}, body: {} };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
      attachment: sinon.stub().returnsThis(),
    };
    next = sinon.stub();

    // Create stubs
    DocumentStub = {
      find: sinon.stub(),
      findOne: sinon.stub(),
      deleteOne: sinon.stub(),
    };
    logActivityStub = sinon.stub();

    // Use proxyquire to inject the stubs
    documentController = proxyquire("../../controllers/documentController", {
      "../models/Document": DocumentStub, // Correctly stub the Document model
      "../utils/activityLogger": { logActivity: logActivityStub }, // Correctly use the logActivity stub
    });
  });

  afterEach(() => {
    sinon.restore();
    // Clear require cache
    delete require.cache[
      require.resolve("../../controllers/documentController")
    ];
  });

  describe("getUserDocuments", () => {
    it("should get all documents for a user", async () => {
      const mockDocuments = [
        { _id: "doc1", originalName: "Document 1" },
        { _id: "doc2", originalName: "Document 2" },
      ];
      DocumentStub.find
        .withArgs({ userId: "testUserId" })
        .resolves(mockDocuments); // Use withArgs

      await documentController.getUserDocuments(req, res);

      expect(DocumentStub.find.calledOnceWith({ userId: "testUserId" })).to.be
        .true;
      expect(res.json.calledOnceWith({ documents: mockDocuments })).to.be.true;
    });

    it("should handle server errors", async () => {
      DocumentStub.find
        .withArgs({ userId: "testUserId" })
        .rejects(new Error("Database error")); // Use withArgs

      await documentController.getUserDocuments(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0]).to.have.property("error");
    });
  });

  describe("downloadDocument", () => {
    it("should download a document", async () => {
      const fileKey = "maskedFileKey";
      const originalName = "originalFileName.jpg";
      const mockDocument = {
        _id: "docId",
        maskedFileName: fileKey,
        originalName,
      };
      const mockS3Response = { Body: { pipe: sinon.stub() } };

      req.params.fileKey = fileKey;

      DocumentStub.findOne
        .withArgs({ userId: "testUserId", maskedFileName: fileKey })
        .resolves(mockDocument); // Use withArgs
      const s3SendStub = sinon.stub(s3, "send").resolves(mockS3Response);

      await documentController.downloadDocument(req, res);

      expect(
        DocumentStub.findOne.calledOnceWith({
          userId: "testUserId",
          maskedFileName: fileKey,
        }),
      ).to.be.true;
      expect(s3SendStub.calledOnce).to.be.true;
      expect(s3SendStub.args[0][0] instanceof GetObjectCommand).to.be.true;
      expect(res.attachment.calledOnceWith(originalName)).to.be.true;
      expect(mockS3Response.Body.pipe.calledOnceWith(res)).to.be.true;
      expect(logActivityStub.calledOnce).to.be.true;
    });

    it("should return 404 if file not found", async () => {
      const fileKey = "nonExistentFileKey";
      req.params.fileKey = fileKey;

      DocumentStub.findOne
        .withArgs({ userId: "testUserId", maskedFileName: fileKey })
        .resolves(null); // Use withArgs

      await documentController.downloadDocument(req, res);

      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith({ error: "File not found" })).to.be.true;
    });

    it("should handle S3 errors", async () => {
      const fileKey = "maskedFileKey";
      const originalName = "originalFileName.jpg";
      const mockDocument = {
        _id: "docId",
        maskedFileName: fileKey,
        originalName,
      };

      req.params.fileKey = fileKey;

      DocumentStub.findOne
        .withArgs({ userId: "testUserId", maskedFileName: fileKey })
        .resolves(mockDocument); // Use withArgs
      sinon.stub(s3, "send").rejects(new Error("S3 error"));

      await documentController.downloadDocument(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0]).to.have.property("error");
      expect(logActivityStub.notCalled).to.be.true;
    });
  });

  describe("deleteDocument", () => {
    it("should delete a document", async () => {
      const fileKey = "maskedFileKey";
      const mockDocument = {
        _id: "docId",
        maskedFileName: fileKey,
        originalName: "original.jpg",
      };

      req.params.fileKey = fileKey;

      DocumentStub.findOne
        .withArgs({ userId: "testUserId", maskedFileName: fileKey })
        .resolves(mockDocument); // Use withArgs
      DocumentStub.deleteOne
        .withArgs({ _id: "docId" })
        .resolves({ deletedCount: 1 }); // Use withArgs, mock deletedCount
      const s3SendStub = sinon.stub(s3, "send").resolves();

      await documentController.deleteDocument(req, res);

      expect(
        DocumentStub.findOne.calledOnceWith({
          userId: "testUserId",
          maskedFileName: fileKey,
        }),
      ).to.be.true;
      expect(s3SendStub.calledOnce).to.be.true;
      expect(s3SendStub.args[0][0] instanceof DeleteObjectCommand).to.be.true;
      expect(DocumentStub.deleteOne.calledOnceWith({ _id: "docId" })).to.be
        .true;
      expect(res.json.calledOnceWith({ message: "File deleted successfully" }))
        .to.be.true;
      expect(logActivityStub.calledOnce).to.be.true;
    });

    it("should return 404 if file not found", async () => {
      const fileKey = "nonExistentFileKey";
      req.params.fileKey = fileKey;

      DocumentStub.findOne
        .withArgs({ userId: "testUserId", maskedFileName: fileKey })
        .resolves(null); // Use withArgs

      await documentController.deleteDocument(req, res);

      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith({ error: "File not found" })).to.be.true;
    });

    it("should handle S3 errors during deletion", async () => {
      const fileKey = "maskedFileKey";
      const mockDocument = {
        _id: "docId",
        maskedFileName: fileKey,
        originalName: "original.jpg",
      };

      req.params.fileKey = fileKey;

      DocumentStub.findOne
        .withArgs({ userId: "testUserId", maskedFileName: fileKey })
        .resolves(mockDocument); // Use withArgs
      sinon.stub(s3, "send").rejects(new Error("S3 error"));

      await documentController.deleteDocument(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0]).to.have.property(
        "messege",
        "Error deleting file",
      );
      expect(logActivityStub.notCalled).to.be.true;
    });
  });
});
