let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const Notification = require("../../models/Notification");
const mongoose = require('mongoose');

describe("Notification Manager", () => {
  let createNotification;
  let markAsRead;
  let saveStub;
  let findByIdAndUpdateStub;

  beforeEach(() => {
    saveStub = sinon.stub(Notification.prototype, "save");
    findByIdAndUpdateStub = sinon.stub(Notification, "findByIdAndUpdate");

    // Use proxyquire for dependency injection
    const notificationManager = proxyquire("../../utils/notificationManager", {
      "../models/Notification": Notification,
    });
    createNotification = notificationManager.createNotification;
    markAsRead = notificationManager.markAsRead;
  });

  afterEach(() => {
    sinon.restore(); // Clean up all stubs
  });

  it("should create a new notification", async () => {
    const userId = new mongoose.Types.ObjectId();
    const title = "New Message";
    const type = "message_encrypted";
    const messageId = new mongoose.Types.ObjectId();

    const metadata = { messageId: messageId };
    const savedNotification = {
        _id: userId, // Use same object ID for the user and notification, for this test's simplicity.  In real use they'd be different
        userId: userId,  // Corrected: use the ObjectId
        title,
        type,
        metadata,
        isRead: false,
    };

    // VERY IMPORTANT: Simulate Mongoose's behavior. Convert ObjectIDs to hex strings.
    const resolvedNotification = {
        _id: savedNotification._id.toHexString(),
        userId: savedNotification.userId.toHexString(),
        title: savedNotification.title,
        type: savedNotification.type,
        metadata: { messageId: savedNotification.metadata.messageId.toHexString() }, // Convert nested ObjectId
        isRead: savedNotification.isRead,
    };

    saveStub.resolves(resolvedNotification); // Resolve with the CORRECTED object.

    const result = await createNotification(userId.toString(), title, type, metadata); // Use toString()
    expect(result).to.be.an('object');
    expect(result.title).to.equal(title);
    expect(result.type).to.equal(type);
    expect(result.isRead).to.be.false;
    expect(saveStub.calledOnce).to.be.true;
    expect(saveStub.calledOnce).to.be.true;

  });

it("should handle errors during notification creation", async () => {
    const userId =  new mongoose.Types.ObjectId();;
    const title = "New Message";
    const type = "message_encrypted";
    const messageId = new mongoose.Types.ObjectId();
    const metadata = { messageId: messageId };
    const error = new Error("Database error");

    saveStub.rejects(error);
    const result = await createNotification(userId.toString(), title, type, metadata); //Pass userId as string
    expect(result).to.deep.equal(error);
    expect(saveStub.calledOnce).to.be.true;

});

it("should mark a notification as read", async () => {
    const notificationId = new mongoose.Types.ObjectId();
    const updatedNotification = {
        _id: notificationId,
        userId: new mongoose.Types.ObjectId(),
        title: "Old Message",
        type: "message_decrypted",
        isRead: true,
    };

    findByIdAndUpdateStub.resolves(updatedNotification);

    const result = await markAsRead(notificationId.toString()); // Pass ID as string
    expect(result).to.deep.equal(updatedNotification);
    expect(findByIdAndUpdateStub.calledOnce).to.be.true;
    expect(findByIdAndUpdateStub.calledWith(
        notificationId.toString(), // Pass ID as string
        { isRead: true },
        { new: true }
    )).to.be.true;
});

it("should handle errors when marking as read", async () => {

    const notificationId = new mongoose.Types.ObjectId();
    const error = new Error("Update error");
    findByIdAndUpdateStub.rejects(error);
    const result = await markAsRead(notificationId.toString());//Pass userId as string
    expect(result).to.deep.equal(error);
    expect(findByIdAndUpdateStub.calledOnce).to.be.true;

});
it('should return null if notification not found (markAsRead)', async () => {
    const notificationId = new mongoose.Types.ObjectId();
    findByIdAndUpdateStub.resolves(null);  // No document found

    const result = await markAsRead(notificationId.toString()); // Pass ID as string
    expect(result).to.be.null;
    expect(findByIdAndUpdateStub.calledOnce).to.be.true;

});
});