// test/sharedByMe.test.js
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const mongoose = require('mongoose');

describe("sharedByMe", () => {
    let sharedByMe;
    let EncryptedMessages;
    let findStub;
    let populateStub;
    let res;
    let req;
    let consoleErrorStub;

    beforeEach(() => {
        // Mock the EncryptedMessages model
        EncryptedMessages = {
            find: sinon.stub(),
        };

        // Mock the populate method (chaining with find)
        populateStub = sinon.stub();
        findStub = sinon.stub().returns({ populate: populateStub });
        EncryptedMessages.find = findStub;

        // Use proxyquire to inject the mocked model
        sharedByMe = proxyquire("../../controllers/sharedByMe", { //  path
            "../models/dataReceiver": EncryptedMessages,
        }).sharedByMe; //  export the function

        // Mock request and response objects
        req = {
            userId: new mongoose.Types.ObjectId().toString(),
        };
        res = {
            status: sinon.stub().returnsThis(),
            send: sinon.stub(),
        };
        consoleErrorStub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        sinon.restore();
    });

    it("should return shared data successfully", async () => {
        const mockData = [
            {
                _id: new mongoose.Types.ObjectId(),
                encryptedText: "encryptedData1",
                receivers: [{ receiverId: { _id: new mongoose.Types.ObjectId(), name: "Receiver1" } }],
                createdAt: new Date(),
            },
        ];

        findStub.withArgs(
            { userId: req.userId },
            { _id: 1, encryptedText: 1, "receivers.receiverId": 1, createdAt: 1 }
        ).returns({ populate: populateStub });
        populateStub.withArgs("receivers.receiverId", "name").resolves(mockData);

        await sharedByMe(req, res);

        expect(res.status.calledWith(200)).to.be.true;
        expect(res.send.calledWith({ success: true, data: mockData })).to.be.true;
        expect(findStub.calledOnce).to.be.true;
        expect(populateStub.calledOnce).to.be.true;
    });

    it("should return a message if no data is shared", async () => {
        findStub.withArgs(
            { userId: req.userId },
            { _id: 1, encryptedText: 1, "receivers.receiverId": 1, createdAt: 1 }
        ).returns({ populate: populateStub });

        populateStub.withArgs("receivers.receiverId", "name").resolves([]);

        await sharedByMe(req, res);

        expect(res.status.calledWith(200)).to.be.true;
        expect(res.send.calledWith({ success: true, message: "No data is sent by you" })).to.be.true;
        expect(findStub.calledOnce).to.be.true;
        expect(populateStub.calledOnce).to.be.true;
    });

    it("should handle errors", async () => {
        const errorMessage = "Database error";
        findStub.withArgs(
            { userId: req.userId },
            { _id: 1, encryptedText: 1, "receivers.receiverId": 1, createdAt: 1 }
        ).returns({ populate: populateStub });
        populateStub.withArgs("receivers.receiverId", "name").rejects(new Error(errorMessage));

        await sharedByMe(req, res);

        expect(res.status.calledWith(400)).to.be.true;
        expect(res.send.calledWith({ error: errorMessage })).to.be.true;
        expect(consoleErrorStub.calledOnce).to.be.true;
        expect(findStub.calledOnce).to.be.true;
        expect(populateStub.calledOnce).to.be.true;
    });
});