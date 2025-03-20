// test/controllers/userController.test.js
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const userController = require("../../controllers/userController");
const User = require("../../models/User");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { s3 } = require("../../config/aws");
const { PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const Notification = require("../../models/Notification");

describe("User Controller", () => {
  let req, res, next;

  beforeEach(() => {
    req = { userId: "testUserId", body: {}, file: null };
    res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    next = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("getUserProfile", () => {
    it("should get user profile", async () => {
      const mockUser = {
        _id: "testUserId",
        name: "Test User",
        phone: "1234567890",
        email: "test@example.com",
        profileImage: "image.jpg",
      };

      // Stub User.findById and its chained select method
      const findByIdStub = sinon.stub(User, "findById");
      findByIdStub.withArgs("testUserId").returns({
        select: sinon
          .stub()
          .withArgs("_id name phone email profileImage")
          .resolves(mockUser),
      });

      await userController.getUserProfile(req, res);

      // Assertions
      expect(findByIdStub.calledOnceWith("testUserId")).to.be.true;
      expect(res.status.calledOnceWith(200)).to.be.true; // Corrected assertion
      expect(res.json.calledOnceWith(mockUser)).to.be.true;
    });

    it("should return 404 if user not found", async () => {
      // Stub User.findById to resolve with null
      const findByIdStub = sinon.stub(User, "findById");
      findByIdStub.withArgs("testUserId").returns({
        select: sinon
          .stub()
          .withArgs("_id name phone email profileImage")
          .resolves(null),
      });

      await userController.getUserProfile(req, res);

      expect(findByIdStub.calledOnceWith("testUserId")).to.be.true;
      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith({ message: "User not found" })).to.be.true;
    });

    it("should return 500 on server error", async () => {
      sinon.stub(User, "findById").throws(new Error("Test error"));

      await userController.getUserProfile(req, res);
      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0].error).to.equal("Internal Server Error");
      expect(res.json.args[0][0].err).to.equal("Test error");
    });
  });

  describe("updateUserProfile", () => {
    it("should update user profile (name and phone)", async () => {
      const updatedData = { name: "Updated Name", phone: "9876543210" };
      req.body = updatedData;
      const mockUpdatedUser = {
        _id: "testUserId",
        ...updatedData,
        email: "test@example.com",
        profileImage: "image.jpg",
      };

      // Stub findByIdAndUpdate and its chained select method
      const findByIdAndUpdateStub = sinon.stub(User, "findByIdAndUpdate");
      findByIdAndUpdateStub
        .withArgs("testUserId", updatedData, { new: true, runValidators: true })
        .returns({
          select: sinon
            .stub()
            .withArgs("_id name phone email profileImage")
            .resolves(mockUpdatedUser),
        });

      await userController.updateUserProfile(req, res);

      expect(
        findByIdAndUpdateStub.calledOnceWith("testUserId", updatedData, {
          new: true,
          runValidators: true,
        }),
      ).to.be.true;
      expect(res.json.calledOnceWith(mockUpdatedUser)).to.be.true;
    });
    it("should return 500 on server error", async () => {
      const updatedData = { name: "Updated Name", phone: "9876543210" };
      req.body = updatedData;
      sinon.stub(User, "findByIdAndUpdate").throws(new Error("Test error"));

      await userController.updateUserProfile(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0].error).to.equal("Internal Server Error");
      expect(res.json.args[0][0].err).to.equal("Test error");
    });
  });

  describe("updateProfileImage", () => {
    it("should update profile image", async () => {
      const mockFile = {
        path: "filePath",
        originalname: "newImage.jpg",
        mimetype: "image/jpeg",
      };
      req.file = mockFile;
      const oldProfileImage =
        "https://test-bucket.s3.test-region.amazonaws.com/oldImage.jpg";
      const mockUser = { _id: "testUserId", profileImage: oldProfileImage };
      const profileImageUrl = `https://test-bucket.s3.test-region.amazonaws.com/profile-images/${mockFile.originalname}`;

      // Stub findById and its select method
      const findByIdStub = sinon.stub(User, "findById");
      findByIdStub.withArgs("testUserId").returns({
        select: sinon.stub().withArgs("profileImage").resolves(mockUser), // Mock the chained select
      });
      const s3SendStub = sinon.stub(s3, "send");
      s3SendStub
        .withArgs(sinon.match.instanceOf(DeleteObjectCommand))
        .resolves(); // Delete old image
      s3SendStub.withArgs(sinon.match.instanceOf(PutObjectCommand)).resolves(); // Upload new image

      sinon.stub(fs, "createReadStream").returns({}); // Mock file stream
      sinon.stub(fs, "unlink").yields(null); // Mock fs.unlink

      await userController.updateProfileImage(req, res);

      expect(findByIdStub.calledOnceWith("testUserId")).to.be.true;
      expect(s3SendStub.calledTwice).to.be.true; // Called for delete and put
      expect(s3SendStub.args[0][0] instanceof DeleteObjectCommand).to.be.true; // Check for DeleteObjectCommand
      expect(s3SendStub.args[1][0] instanceof PutObjectCommand).to.be.true; // Check for PutObjectCommand
      expect(res.status.calledOnceWith(200)).to.be.true;
    });

    it("should handle no image uploaded", async () => {
      req.file = null; // No file

      await userController.updateProfileImage(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
      expect(res.json.calledOnceWith({ message: "No image uploaded" })).to.be
        .true;
    });
    it("should return 500 on server error", async () => {
      const mockFile = {
        path: "filePath",
        originalname: "newImage.jpg",
        mimetype: "image/jpeg",
      };
      req.file = mockFile;

      sinon.stub(User, "findById").throws(new Error("Test error"));
      sinon.stub(fs, "createReadStream").returns({}); // Mock file stream
      sinon.stub(fs, "unlink").yields(null); // Mock fs.unlink

      await userController.updateProfileImage(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0].message).to.equal("Server error");
      expect(res.json.args[0][0].error).to.equal("Test error");
    });
  });
  describe("deleteUserAccount", () => {
    it("should delete user account", async () => {
      sinon
        .stub(User, "findByIdAndDelete")
        .withArgs("testUserId")
        .resolves({ _id: "testUserId" });

      await userController.deleteUserAccount(req, res);

      expect(User.findByIdAndDelete.calledOnceWith("testUserId")).to.be.true;
      expect(
        res.json.calledOnceWith({ message: "Account deleted successfully" }),
      ).to.be.true;
    });
    it("should return 500 on server error", async () => {
      sinon.stub(User, "findByIdAndDelete").throws(new Error("Test error"));

      await userController.deleteUserAccount(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0].error).to.equal("Test error");
    });
  });

  describe("changePassword", () => {
    it("should change user password", async () => {
      const newPassword = "newPassword";
      req.body = { password: newPassword };
      const hashedPassword = "hashedNewPassword";
      const mockUser = { _id: "testUserId", save: sinon.stub().resolves() };

      sinon.stub(User, "findById").withArgs("testUserId").resolves(mockUser);
      sinon
        .stub(bcrypt, "hash")
        .withArgs(newPassword, 10)
        .resolves(hashedPassword);

      await userController.changePassword(req, res);

      expect(User.findById.calledOnceWith("testUserId")).to.be.true;
      expect(bcrypt.hash.calledOnceWith(newPassword, 10)).to.be.true;
      expect(mockUser.save.calledOnce).to.be.true; // Verify save
      expect(
        res.json.calledOnceWith({ message: "Password changed successfully" }),
      ).to.be.true;
    });

    it("should return 404 if user not found", async () => {
      const newPassword = "newPassword";
      req.body = { password: newPassword };

      sinon.stub(User, "findById").withArgs("testUserId").resolves(null);

      await userController.changePassword(req, res);

      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith({ message: "User not found" })).to.be.true;
    });
    it("should return 500 on server error", async () => {
      const newPassword = "newPassword";
      req.body = { password: newPassword };

      sinon.stub(User, "findById").throws(new Error("Test Error"));
      await userController.changePassword(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0].error).to.equal("Internal Server Error");
      expect(res.json.args[0][0].err).to.equal("Test Error");
    });
  });
  describe("getUsers", () => {
    it("should get a list of users (excluding self)", async () => {
      const mockUsers = [
        { _id: "user1", name: "User 1", email: "user1@example.com" },
        { _id: "user2", name: "User 2", email: "user2@example.com" },
      ];
      const findStub = sinon.stub(User, "find");
      findStub.withArgs({ _id: { $ne: req.userId } }).returns({
        // Chain methods
        select: sinon.stub().returnsThis(),
        limit: sinon.stub().resolves(mockUsers),
      });

      await userController.getUsers(req, res);
      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnceWith(mockUsers)).to.be.true;
    });
    it("should return 404 if user not found", async () => {
      const findStub = sinon.stub(User, "find");
      findStub.withArgs({ _id: { $ne: req.userId } }).returns({
        // Chain methods
        select: sinon.stub().returnsThis(),
        limit: sinon.stub().resolves(null),
      });

      await userController.getUsers(req, res);

      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith({ message: "User not found" })).to.be.true;
    });
    it("should return 500 on server error", async () => {
      sinon.stub(User, "find").throws(new Error("Test error"));
      await userController.getUsers(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0].error).to.equal("Test error");
    });
  });

  describe("getNotification", () => {
    it("should get user notifications", async () => {
      const mockNotifications = [
        { message: "Notification 1", userId: "testUserId", isRead: false },
        { message: "Notification 2", userId: "testUserId", isRead: false },
      ];

      // Correctly stub the Notification.find method
      sinon
        .stub(Notification, "find")
        .withArgs({ userId: "testUserId", isRead: false })
        .resolves(mockNotifications);

      await userController.getNotification(req, res);

      expect(Notification.find.calledOnce).to.be.true;
      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnceWith(mockNotifications)).to.be.true;
    });

    it("should return 404 if no notifications found", async () => {
      // Stub to return null to simulate no notifications
      sinon
        .stub(Notification, "find")
        .withArgs({ userId: "testUserId", isRead: false })
        .resolves(null);

      await userController.getNotification(req, res);

      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith({ message: "User not found" })).to.be.true;
    });

    it("should return 500 on server error", async () => {
      // Stub to throw an error
      sinon.stub(Notification, "find").throws(new Error("Test error"));

      await userController.getNotification(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0].error).to.equal("Test error");
    });
  });
});
