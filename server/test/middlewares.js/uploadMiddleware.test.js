// test/middlewares/uploadMiddleware.test.js
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const multer = require("multer");

describe("upload Middleware", () => {
  let uploadMiddleware;
  let req, res, next;
  let multerStub, diskStorageStub, singleStub;

  afterEach(() => {
    sinon.restore();
  });

  it("should correctly handle a single file upload", async () => {
    // Set up mocks
    req = { file: { originalname: "test.txt" } };
    res = {};
    next = sinon.spy();

    const destinationStub = sinon.stub();
    const filenameStub = sinon.stub();

    diskStorageStub = sinon.stub(multer, "diskStorage").callsFake((options) => {
      options.destination(req, req.file, destinationStub);
      options.filename(req, req.file, filenameStub);
      return {
        // Minimal mock of storage engine
        _handleFile: sinon.stub(),
        _removeFile: sinon.stub(),
      };
    });

    singleStub = sinon.stub().callsFake((req, res, next) => {
      // Simulate a successful upload by modifying req.file
      req.file = {
        ...req.file,
        filename: "mocked-filename.txt",
        path: "uploads/mocked-filename.txt",
      };
      next(); // Call next() with no arguments
    });
    multerStub = sinon
      .stub(multer, "call")
      .returns({ single: () => singleStub });

    // Inject mocks using proxyquire
    uploadMiddleware = proxyquire("../../middlewares/uploadMiddleware", {
      multer: multerStub,
    });

    // Call the middleware
    await uploadMiddleware(req, res, next);

    // Assertions
    expect(next.calledOnceWithExactly()).to.be.true; // Verify next() was called without arguments
    expect(req.file.filename).to.equal("mocked-filename.txt"); // Verify file properties
    expect(req.file.path).to.equal("uploads/mocked-filename.txt");
    expect(destinationStub.called).to.be.true; // Verify destination function was called.
    expect(filenameStub.called).to.be.true; // Verify filename function was called.
    expect(diskStorageStub.calledOnce).to.be.true; // Verify diskStorage was called
  });

  it("should handle file upload error", async () => {
    // Set up mocks
    req = { file: { originalname: "test.txt" } };
    res = {};
    next = sinon.spy();

    const multerError = new Error("Test Multer Error");

    // Mock diskStorage to ensure the options are handled.
    diskStorageStub = sinon.stub(multer, "diskStorage").callsFake((options) => {
      return {
        // Minimal mock of storage engine, doesn't need to call destination/filename
        _handleFile: sinon.stub(),
        _removeFile: sinon.stub(),
      };
    });

    // Mock single() to simulate a Multer error
    singleStub = sinon.stub().callsFake((req, res, next) => {
      next(multerError); // Pass the error to next()
    });
    multerStub = sinon
      .stub(multer, "call")
      .returns({ single: () => singleStub });

    // Inject mocks using proxyquire
    uploadMiddleware = proxyquire("../../middlewares/uploadMiddleware", {
      multer: multerStub,
    });

    // Call the middleware
    await uploadMiddleware(req, res, next);

    // Assertions
    expect(next.calledOnceWithExactly(multerError)).to.be.true; // Verify next() was called with the error
  });
});
