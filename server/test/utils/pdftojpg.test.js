let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});

const sinon = require("sinon");
const proxyquire = require("proxyquire");
const fs = require("fs");
const https = require("https");
const request = require("request");
const path = require("path");

describe("PDF to JPG Converter", () => {
  let pdfToJpgConverter;
  let getStub, postStub, readFileStub, createWriteStreamStub, pipeStub, putStub;
  let consoleErrorStub;

  beforeEach(() => {
    // Mock fs methods
    readFileStub = sinon.stub(fs, "readFile");
    createWriteStreamStub = sinon.stub(fs, "createWriteStream");

    // Mock https methods
    getStub = sinon.stub(https, "get");
    postStub = sinon.stub(https, "request");

    //Mock request.put
    putStub = sinon.stub(request, "put");

    // Mock stream.pipe()
    pipeStub = sinon.stub(); // Create the stub here

    consoleErrorStub = sinon.stub(console, "error");

    // Use proxyquire to inject the stubs
    pdfToJpgConverter = proxyquire("../../utils/PdfHandlers/pdftojpg.js", {
      fs: { readFile: readFileStub, createWriteStream: createWriteStreamStub },
      https: { get: getStub, request: postStub },
      request: { put: putStub },
      path: path, // Pass through the real path module.
    });
    process.env.PDF_API_KEY = "dummy_api_key";
  });

  afterEach(() => {
    sinon.restore();
    delete process.env.PDF_API_KEY;
  });

  it("should convert a PDF to JPG successfully", async () => {
    const sourceFile = "test.pdf";
    const presignedUrl = "https://example.com/upload";
    const uploadedFileUrl = "https://example.com/uploaded.pdf";
    const imageUrls = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ];
    const downloadedPaths = ["./uploads/page1.jpg", "./uploads/page2.jpg"];

    // 1. Mock getPresignedUrl (https.get)
    const getPresignedUrlResponse = {
      error: false,
      presignedUrl,
      url: uploadedFileUrl,
    };
    const getReq = { on: sinon.stub() }; // Mock request object
    const getRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(getPresignedUrlResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };
    getStub.returns(getReq);
    getStub.yields(getRes);

    // 2. Mock uploadFile (fs.readFile and request.put)
    readFileStub.callsArgWith(1, null, "fake file content"); // No error, fake content
    putStub.callsArg(1); // No error on upload

    // 3. Mock convertPDFToJPG (https.request)
    const convertPdfResponse = { error: false, urls: imageUrls };
    const postReq = {
      write: sinon.stub(),
      end: sinon.stub(),
      on: sinon.stub(),
    };
    const postRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(convertPdfResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };

    postStub.returns(postReq); // Return the mock request
    postStub.yields(postRes); // Call the callback with the mock response

    // 4. Mock downloadImages (fs.createWriteStream and https.get)
    const writeStreamMock = { on: sinon.stub() }; // Mock the WriteStream
    createWriteStreamStub.returns(writeStreamMock);

    imageUrls.forEach((_, index) => {
      const imageGetReq = { on: sinon.stub() };
      const imageGetRes = { pipe: pipeStub };

      getStub.onCall(index + 1).returns(imageGetReq); // The +1 is crucial
      getStub.onCall(index + 1).yields(imageGetRes);
      // Simulate 'finish' event for each file
      writeStreamMock.on.withArgs("finish").callsArg(1); // Call the finish callback
    });

    const result = await pdfToJpgConverter(sourceFile);

    expect(result).to.deep.equal(downloadedPaths);
    expect(getStub.called).to.be.true;
    expect(readFileStub.calledOnce).to.be.true;
    expect(putStub.calledOnce).to.be.true;
    expect(postStub.calledOnce).to.be.true;
    expect(createWriteStreamStub.callCount).to.equal(imageUrls.length);
    expect(pipeStub.callCount).to.equal(imageUrls.length);
  });

  it("should handle errors in getPresignedUrl", async () => {
    const sourceFile = "test.pdf";
    const errorMessage = "Failed to get presigned URL";

    const getRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify({ error: true, message: errorMessage }));
        } else if (event === "end") {
          callback();
        }
      }),
    };

    const getReq = { on: sinon.stub() };
    getStub.returns(getReq);
    getStub.yields(getRes);

    try {
      await pdfToJpgConverter(sourceFile);
    } catch (error) {
      expect(error.message).to.equal(errorMessage);
      expect(consoleErrorStub.called).to.be.true;
      expect(consoleErrorStub.args[0][0]).to.equal(errorMessage);
    }
    expect(getStub.calledOnce).to.be.true;
  });

  it("should handle errors during file upload", async () => {
    const sourceFile = "test.pdf";
    const presignedUrl = "https://example.com/upload";
    const uploadedFileUrl = "https://example.com/uploaded.pdf";
    const uploadError = new Error("Upload failed");

    const getPresignedUrlResponse = {
      error: false,
      presignedUrl,
      url: uploadedFileUrl,
    };
    const getReq = { on: sinon.stub() };
    const getRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(getPresignedUrlResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };
    getStub.returns(getReq);
    getStub.yields(getRes);

    readFileStub.callsArgWith(1, null, "file content"); // Simulate successful file read
    putStub.callsArgWith(1, uploadError); // Simulate error during upload

    try {
      await pdfToJpgConverter(sourceFile);
    } catch (error) {
      expect(error.message).to.equal(uploadError.message); // Check for correct error message
      expect(consoleErrorStub.called).to.be.true;
      expect(consoleErrorStub.args[0][0]).to.deep.equal(uploadError);
    }
    expect(getStub.calledOnce).to.be.true;
    expect(readFileStub.calledOnce).to.be.true;
    expect(putStub.calledOnce).to.be.true;
  });

  it("should handle errors during PDF conversion", async () => {
    const sourceFile = "test.pdf";
    const presignedUrl = "https://example.com/upload";
    const uploadedFileUrl = "https://example.com/uploaded.pdf";
    const conversionError = new Error("Conversion failed");

    const getPresignedUrlResponse = {
      error: false,
      presignedUrl,
      url: uploadedFileUrl,
    };
    const getReq = { on: sinon.stub() };
    const getRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(getPresignedUrlResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };
    getStub.returns(getReq);
    getStub.yields(getRes);
    readFileStub.callsArgWith(1, null, "fake file content");
    putStub.callsArg(1);

    const convertPdfResponse = {
      error: true,
      message: conversionError.message,
    };
    const postReq = {
      write: sinon.stub(),
      end: sinon.stub(),
      on: sinon.stub(),
    };
    const postRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(convertPdfResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };

    postStub.returns(postReq);
    postStub.yields(postRes);

    try {
      await pdfToJpgConverter(sourceFile);
    } catch (error) {
      expect(error.message).to.equal(conversionError.message); // Check for correct error
      expect(consoleErrorStub.called).to.be.true;
      expect(consoleErrorStub.args[0][0]).to.deep.equal(conversionError);
    }
    expect(getStub.calledOnce).to.be.true;
    expect(readFileStub.calledOnce).to.be.true;
    expect(putStub.calledOnce).to.be.true;
    expect(postStub.calledOnce).to.be.true;
  });
  it("should handle errors during image download", async () => {
    const sourceFile = "test.pdf";
    const presignedUrl = "https://example.com/upload";
    const uploadedFileUrl = "https://example.com/uploaded.pdf";
    const imageUrls = ["https://example.com/image1.jpg"];
    const downloadError = new Error("Download failed");

    const getPresignedUrlResponse = {
      error: false,
      presignedUrl,
      url: uploadedFileUrl,
    };
    const getReq = { on: sinon.stub() }; // Mock request object
    const getRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(getPresignedUrlResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };
    getStub.returns(getReq);
    getStub.yields(getRes);

    readFileStub.callsArgWith(1, null, "fake file content"); // No error, fake content
    putStub.callsArg(1); // No error

    const convertPdfResponse = { error: false, urls: imageUrls };
    const postReq = {
      write: sinon.stub(),
      end: sinon.stub(),
      on: sinon.stub(),
    };
    const postRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(convertPdfResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };

    postStub.returns(postReq); // Return the mock request
    postStub.yields(postRes);

    const writeStreamMock = { on: sinon.stub() };
    createWriteStreamStub.returns(writeStreamMock);

    const imageGetReq = { on: sinon.stub() };
    const imageGetRes = { pipe: pipeStub };

    getStub.onCall(1).returns(imageGetReq);
    getStub.onCall(1).yields(imageGetRes);
    imageGetReq.on.withArgs("error").yields(downloadError); // Simulate error

    try {
      await pdfToJpgConverter(sourceFile);
    } catch (error) {
      expect(error.message).to.equal(downloadError.message); // Check for correct error message
      expect(consoleErrorStub.called).to.be.true;
      expect(consoleErrorStub.args[0][0]).to.deep.equal(downloadError);
    }
    expect(getStub.called).to.be.true;
    expect(readFileStub.calledOnce).to.be.true;
    expect(putStub.calledOnce).to.be.true;
    expect(postStub.calledOnce).to.be.true;
    expect(createWriteStreamStub.calledOnce).to.be.true;
  });

  it("should handle errors reading the source file", async () => {
    const sourceFile = "test.pdf";
    const readError = new Error("File read error");

    // Mock getPresignedUrl to succeed
    const getPresignedUrlResponse = {
      error: false,
      presignedUrl: "presigned_url",
      url: "uploaded_url",
    };
    const getReq = { on: sinon.stub() }; // Mock request object
    const getRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(getPresignedUrlResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };

    getStub.returns(getReq);
    getStub.yields(getRes);

    // Mock readFile to throw an error
    readFileStub.callsArgWith(1, readError);

    try {
      await pdfToJpgConverter(sourceFile);
    } catch (error) {
      expect(error.message).to.equal(readError.message); // Check for correct error message
      expect(consoleErrorStub.called).to.be.true;
      expect(consoleErrorStub.args[0][0]).to.deep.equal(readError);
    }
    expect(getStub.calledOnce).to.be.true;
    expect(readFileStub.calledOnce).to.be.true;
  });
  it("should handle errors from https.get in getPresignedUrl", async () => {
    const sourceFile = "test.pdf";
    const getError = new Error("HTTPS GET error");

    // Mock the 'error' event of https.get
    const getReq = { on: sinon.stub() };
    getStub.returns(getReq);
    getReq.on.withArgs("error").yields(getError); // Simulate error

    try {
      await pdfToJpgConverter(sourceFile);
    } catch (error) {
      expect(error.message).to.equal(getError.message);
      expect(consoleErrorStub.called).to.be.true;
      expect(consoleErrorStub.args[0][0]).to.deep.equal(getError);
    }
    expect(getStub.calledOnce).to.be.true;
  });
  it("should handle errors from https.request in convertPDFToJPG", async () => {
    const sourceFile = "test.pdf";
    const presignedUrl = "https://example.com/upload";
    const uploadedFileUrl = "https://example.com/uploaded.pdf";
    const requestError = new Error("HTTPS request error");

    const getPresignedUrlResponse = {
      error: false,
      presignedUrl,
      url: uploadedFileUrl,
    };
    const getReq = { on: sinon.stub() };
    const getRes = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === "data") {
          callback(JSON.stringify(getPresignedUrlResponse));
        } else if (event === "end") {
          callback();
        }
      }),
    };
    getStub.returns(getReq);
    getStub.yields(getRes);

    readFileStub.callsArgWith(1, null, "file content");
    putStub.callsArg(1); // No error

    const postReq = {
      write: sinon.stub(),
      end: sinon.stub(),
      on: sinon.stub(),
    };
    postStub.returns(postReq);
    postReq.on.withArgs("error").yields(requestError); // Simulate error on request

    try {
      await pdfToJpgConverter(sourceFile);
    } catch (error) {
      expect(error.message).to.deep.equal(requestError.message);
      expect(consoleErrorStub.called).to.be.true;
      expect(consoleErrorStub.args[0][0]).to.deep.equal(requestError);
    }
    expect(getStub.calledOnce).to.be.true;
    expect(readFileStub.calledOnce).to.be.true;
    expect(putStub.calledOnce).to.be.true;
    expect(postStub.calledOnce).to.be.true;
  });
});
