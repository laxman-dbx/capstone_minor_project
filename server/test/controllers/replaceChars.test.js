let chai;
let expect;
before(async () => {
    chai = await import("chai");
    expect = chai.expect;
});

const sinon = require("sinon");
let replaceCharsController = require('../../controllers/replaceChars');
let {detectPii} = require('../../controllers/detectPii');


let mockRequest;
let mockResponse;

describe("Replace with Chars", function () {
    
    beforeEach(() => {
        mockRequest = {
            body: {}
        };
    
        mockResponse = {
            status: sinon.stub().returnsThis(),
            send: sinon.stub().returnsThis(),
        };
    });


    it("should return an error if text parameter is missing", async function () {
        mockRequest.body = {};
        await replaceCharsController.replaceChars(mockRequest, mockResponse);

        expect(mockResponse.status.calledWith(200)).to.be.true;
        expect(mockResponse.send.calledWith({ success: false, error: "Text parameter is required" })).to.be.true;
    });

    it("should return success with encrypted text if text is provided", async function () {
        this.timeout(10000);
        mockRequest.body = { text: "hello mike, this is vethan from darwinbox" };

        const mockDetectPiiResponse = {
            success: true,
            encryptedText: "hello ***** this is ****** from *********",
            newIndex: [[5, 10], [19, 25], [31, 40]]
        }; 
        
        let expectedResponse = {
            success: true,
            encryptedText: "hello ***** this is ****** from *********",
            newIndex: [[5, 10], [19, 25], [31, 40]]
        };


        sinon.stub(detectPii).resolves(mockDetectPiiResponse);

        await replaceCharsController.replaceChars(mockRequest, mockResponse);
        expect(mockResponse.status.calledWith(200)).to.be.true;
        expect(mockResponse.send.calledWith(expectedResponse)).to.be.true;
    });


    it("should return an error if an exception occurs in detectPii", async function () {
        this.timeout(15000);
    
        mockRequest.body = { text: "My email is john.doe@example.com" };
        sinon.stub(detectPii).rejects(new Error("Some error"));
        await replaceCharsController.replaceChars(mockRequest, mockResponse);
        expect(mockResponse.status.calledWith(200)).to.be.true;
        expect(mockResponse.send.calledWith({
            success: false,
            error: 'An error occurred while processing your request'
        })).to.be.false;
    
        sinon.restore();
    });
    
    
});

