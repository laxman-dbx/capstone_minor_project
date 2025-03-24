let chai;
let expect;
before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});

const sinon = require("sinon");
let replaceCharsController = require("../../controllers/replaceChars");
let detectPii = require("../../controllers/detectPii");

let func = detectPii.detectPii;

describe("Replace with Chars", function () {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {
      body: {},
    };

    mockResponse = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
    };
  });

  afterEach(() => {
    sinon.restore(); // Ensure all stubs are restored after each test
  });

  it("should return an error if text parameter is missing", async function () {
    mockRequest.body = {};

    await replaceCharsController.replaceChars(mockRequest, mockResponse);

    expect(mockResponse.status.calledWith(200)).to.be.true;
    expect(
      mockResponse.send.calledWith({
        success: false,
        error: "Text parameter is required",
      })
    ).to.be.true;
  });

  it("should return success with encrypted text if text is provided", async function () {
    this.timeout(0);
    mockRequest.body = { text: "hello mike, this is vethan from darwinbox" };

    const mockDetectPiiResponse = {
      success: true,
      encryptedText: "hello ***** this is ****** from *********",
      newIndex: [
        [5, 10],
        [19, 25],
        [31, 40],
      ],
    };

    const expectedResponse = {
      success: true,
      encryptedText: "hello ***** this is ****** from *********",
      newIndex: [
        [5, 10],
        [19, 25],
        [31, 40],
      ],
    };

    sinon.stub(func).resolves(mockDetectPiiResponse);

    await replaceCharsController.replaceChars(mockRequest, mockResponse);

    expect(mockResponse.status.calledWith(200)).to.be.true;
    expect(mockResponse.send.calledWith(expectedResponse)).to.be.true;
  });

});
