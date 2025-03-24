let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const mongoose = require("mongoose");


describe("sharedToMe", () => {
    let sharedToMe;
    let EncryptedMessages;
    let findStub;
    let populateStub;
    let res;
    let req;
    let consoleErrorStub;
  
    beforeEach(() => {
      EncryptedMessages = {
        find: sinon.stub(),
      };
  
      populateStub = sinon.stub();
      findStub = sinon.stub().returns({ populate: populateStub });
      EncryptedMessages.find = findStub;
  
      sharedToMe = proxyquire("../../controllers/sharedToMe", {
        "../models/dataReceiver": EncryptedMessages,
      }).sharedToMe;
  
      req = {
        userId: new mongoose.Types.ObjectId().toString(),
      };
      res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      consoleErrorStub = sinon.stub(console, "error");
    });
  
    afterEach(() => {
      sinon.restore();
    });
  
    it("should return shared data successfully", async () => {
      const mockData = [
        {
          _id: new mongoose.Types.ObjectId(),
          userId: new mongoose.Types.ObjectId(),
          encryptedText: "encryptedData1",
          createdAt: new Date(),
          receivers: [
            {
              receiverId: req.userId,
            },
          ],
        },
      ];
  
      findStub
        .withArgs(
          { "receivers.receiverId": req.userId, userId: { $ne: req.userId } },
          { _id: 1, userId: 1, encryptedText: 1, createdAt: 1 }
        )
        .returns({ populate: populateStub });
  
      populateStub.withArgs("userId", "name").resolves(mockData);
  
      await sharedToMe(req, res);
  
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith({ success: true, sharedFiles: mockData })).to.be.true;
      expect(findStub.calledOnce).to.be.true;
      expect(populateStub.calledOnce).to.be.true;
    });
  
    it("should return a message if no files are shared with the user", async () => {
      findStub
        .withArgs(
          { "receivers.receiverId": req.userId, userId: { $ne: req.userId } },
          { _id: 1, userId: 1, encryptedText: 1, createdAt: 1 }
        )
        .returns({ populate: populateStub });
  
      populateStub.withArgs("userId", "name").resolves([]);
  
      await sharedToMe(req, res);
  
      expect(res.status.calledWith(200)).to.be.true;
      expect(
        res.json.calledWith({ success: true, message: "No files shared with you." })
      ).to.be.true;
      expect(findStub.calledOnce).to.be.true;
      expect(populateStub.calledOnce).to.be.true;
    });
  
    it("should handle errors", async () => {
      const errorMessage = "Database error";
      findStub
        .withArgs(
          { "receivers.receiverId": req.userId, userId: { $ne: req.userId } },
          { _id: 1, userId: 1, encryptedText: 1, createdAt: 1 }
        )
        .returns({ populate: populateStub });
  
      populateStub
        .withArgs("userId", "name")
        .rejects(new Error(errorMessage));
  
      await sharedToMe(req, res);
  
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ error: "An error occurred while fetching shared files." })).to.be.true;
      expect(consoleErrorStub.calledOnce).to.be.true;
      expect(findStub.calledOnce).to.be.true;
      expect(populateStub.calledOnce).to.be.true;
    });
  });
  
  
