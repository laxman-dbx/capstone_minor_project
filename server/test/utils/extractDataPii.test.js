let chai;
let expect;
before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});

const sinon = require("sinon");
const proxyquire = require("proxyquire");
const { PassThrough } = require("stream");

describe("extractDataPii", () => {
  let extractDataPii;
  let httpsMock;
  let fsMock;

  beforeEach(() => {
    // Mock fs.readFileSync
    fsMock = {
      readFileSync: sinon.stub().returns("mockedImageBase64"),
    };

    // Mock https.request - setup *inside* beforeEach
    httpsMock = {
      request: sinon.stub(), // Initialize the stub
    };

    // Use proxyquire to inject mocks
    extractDataPii = proxyquire("../../utils/Imagehandlers/extractDataPii.js", {
      // Replace 'your-module-file'
      https: httpsMock,
      fs: fsMock,
    });
  });

  afterEach(() => {
    sinon.restore(); // Restore all stubs after each test
  });

  it("should successfully extract PII locations from a valid response", async () => {
    const mockPredictions = [
      { x: 100, y: 150, width: 50, height: 60 },
      { x: 200, y: 250, width: 70, height: 80 },
    ];
    const mockResponse = { predictions: mockPredictions };
    const expectedPiiLocations = [
      {
        pattern: "other",
        text: "other",
        location: { Left: 75, Top: 120, Width: 50, Height: 60 },
      },
      {
        pattern: "other",
        text: "other",
        location: { Left: 165, Top: 210, Width: 70, Height: 80 },
      },
    ];

    const requestStub = new PassThrough();
    requestStub.write = sinon.stub();
    requestStub.end = sinon.stub();
    const responseStub = new PassThrough();

    httpsMock.request.callsFake((options, callback) => {
      callback(responseStub); // Call the callback with the mock response

      // Emit events *after* calling the callback
      responseStub.emit("data", JSON.stringify(mockResponse));
      responseStub.emit("end");
      return requestStub;
    });

    const piiLocations = await extractDataPii("test_image.jpg");
    expect(piiLocations).to.deep.equal(expectedPiiLocations);
    expect(httpsMock.request.calledOnce).to.be.true;
    const expectedOptions = {
      method: "POST",
      hostname: "detect.roboflow.com",
      path: "/projectad/6?api_key=5iYNtCTx136at7zLCkHt",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": 17,
      },
    };
    expect(httpsMock.request.getCall(0).args[0]).to.deep.include(
      expectedOptions,
    );
    expect(requestStub.write.calledWith("mockedImageBase64")).to.be.true;
    expect(requestStub.end.called).to.be.true;
  });

  it("should handle an empty predictions array", async () => {
    const mockResponse = { predictions: [] };
    const requestStub = new PassThrough();
    requestStub.write = sinon.stub();
    requestStub.end = sinon.stub();
    const responseStub = new PassThrough();

    httpsMock.request.callsFake((options, callback) => {
      callback(responseStub);
      responseStub.emit("data", JSON.stringify(mockResponse));
      responseStub.emit("end");
      return requestStub;
    });

    const piiLocations = await extractDataPii("test_image.jpg");
    expect(piiLocations).to.deep.equal([]);
    expect(requestStub.end.called).to.be.true;
  });

  it("should handle a response with no predictions", async () => {
    const mockResponse = {};
    const requestStub = new PassThrough();
    requestStub.write = sinon.stub();
    requestStub.end = sinon.stub();

    const responseStub = new PassThrough();

    httpsMock.request.callsFake((options, callback) => {
      callback(responseStub);
      responseStub.emit("data", JSON.stringify(mockResponse));
      responseStub.emit("end");
      return requestStub;
    });

    const piiLocations = await extractDataPii("test_image.jpg");
    expect(piiLocations).to.deep.equal([]);
    expect(requestStub.end.called).to.be.true;
  });

  it("should handle a JSON parsing error", async () => {
    const requestStub = new PassThrough();
    requestStub.write = sinon.stub();
    requestStub.end = sinon.stub();
    const responseStub = new PassThrough();

    httpsMock.request.callsFake((options, callback) => {
      callback(responseStub);
      responseStub.emit("data", "invalid json");
      responseStub.emit("end");
      return requestStub;
    });

    try {
      await extractDataPii("test_image.jpg");
      expect.fail("Expected an error to be thrown");
    } catch (error) {
      expect(error).to.be.instanceOf(SyntaxError);
      expect(requestStub.end.called).to.be.true;
    }
  });

  it("should handle an https request error", async () => {
    const requestStub = new PassThrough();
    requestStub.write = sinon.stub();
    requestStub.end = sinon.stub();

    httpsMock.request.callsFake((options, callback) => {
      // *Don't* call the callback in this case
      setTimeout(() => {
        requestStub.emit("error", new Error("Network error"));
      }, 0);
      return requestStub;
    });
    try {
      await extractDataPii("test_image.jpg");
      expect.fail("Expected an error to be thrown");
    } catch (error) {
      expect(error.message).to.equal("Network error");
    }
  });

  it("should handle a response error", async () => {
    const requestStub = new PassThrough();
    requestStub.write = sinon.stub();
    requestStub.end = sinon.stub();
    const responseStub = new PassThrough();

    httpsMock.request.callsFake((options, callback) => {
      callback(responseStub);
      responseStub.emit("error", new Error("Response error"));
      return requestStub;
    });

    try {
      await extractDataPii("test_image.jpg");
      expect.fail("Expected an error to be thrown");
    } catch (error) {
      expect(error.message).to.equal("Response error");
      expect(requestStub.end.called).to.be.true;
    }
  });

  it("should send the correct request with an image", async () => {
    const mockPredictions = [{ x: 100, y: 150, width: 50, height: 60 }];
    const mockResponse = { predictions: mockPredictions };
    const requestStub = new PassThrough();
    requestStub.write = sinon.stub();
    requestStub.end = sinon.stub();
    const responseStub = new PassThrough();

    httpsMock.request.callsFake((options, callback) => {
      callback(responseStub);
      responseStub.emit("data", JSON.stringify(mockResponse));
      responseStub.emit("end");
      return requestStub;
    });

    await extractDataPii("test_image.jpg");
    expect(requestStub.write.calledWith("mockedImageBase64")).to.be.true;
    expect(requestStub.end.calledOnce).to.be.true;
  });
});
