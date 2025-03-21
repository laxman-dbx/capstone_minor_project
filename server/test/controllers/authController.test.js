// test/controllers/authController.test.js

const sinon = require("sinon");
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
let authController = require("../../controllers/authController");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { s3 } = require("../../config/aws");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("Auth Controller", () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {}, file: null };
    res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    next = sinon.stub();

    const generateRSAKeyPairStub = sinon.stub().resolves({
      publicKey: "mockedPublicKey",
      privateKey: "mockedPrivateKey",
    });
    const generateTokenStub = sinon.stub().returns("mockedToken");

    // Proxyquire to inject mocked dependencies
    authController = proxyquire("../../controllers/authController", {
      "../utils/generateRSAKeyPair": generateRSAKeyPairStub,
      "../utils/generateToken": generateTokenStub,
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("registerUser", () => {
    it("should register a new user", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password",
        phone: "1234567890",
      };
      req.body = userData;
      const hashedPassword = "hashedPassword";
      const profileImageUrl = "profileImageUrl";
      const mockUser = {
        _id: "userId",
        ...userData,
        profileImage: profileImageUrl,
        publicKey: "mockedPublicKey",
      };

      sinon.stub(User, "findOne").resolves(null);
      sinon.stub(bcrypt, "hash").resolves(hashedPassword);
      sinon.stub(fs, "createReadStream").returns({}); // Mock file stream
      sinon.stub(s3, "send").resolves({}); // Mock S3 upload
      sinon.stub(fs, "unlink").yields(null); // Mock fs.unlink
      sinon.stub(User, "create").resolves(mockUser);

      // Simulate file upload
      req.file = {
        path: "filePath",
        originalname: "originalName",
        mimetype: "image/jpeg",
      };

      await authController.registerUser(req, res);

      expect(res.status.calledOnceWith(201)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "User Registered Successfully",
          token: "mockedToken",
        }),
      ).to.be.true;
    });

    it("should handle existing user", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password",
        phone: "1234567890",
      };
      req.body = userData;
      sinon.stub(User, "findOne").resolves({ email: "test@example.com" });

      await authController.registerUser(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
      expect(res.json.calledOnceWith({ message: "User already exists" })).to.be
        .true;
    });
    it("should return 500 for server error", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password",
        phone: "1234567890",
      };
      req.body = userData;
      sinon.stub(User, "findOne").rejects(new Error("Database error"));

      // AWAIT the controller call.  This handles the rejected promise.
      await authController.registerUser(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      // expect(res.json.calledOnceWith({ message: 'Server error' , error})).to.be.true;
    });
  });

  describe("loginUser", () => {
    it("should log in an existing user", async () => {
      const userData = {
        _id: "userId",
        name: "Test User",
        email: "test@example.com",
        password: "hashedPassword",
        phone: "1234567890",
        profileImage: "profileImageUrl",
      };
      req.body = { email: "test@example.com", password: "password" };
      sinon.stub(User, "findOne").returns({
        select: sinon.stub().resolves(userData),
      });

      sinon.stub(bcrypt, "compare").resolves(true);

      await authController.loginUser(req, res);
      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(
        res.json.calledOnceWith({
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          profileImage: userData.profileImage,
          token: "mockedToken",
        }),
      ).to.be.true;
    });

    it("should handle invalid credentials (user not found)", async () => {
      req.body = { email: "test@example.com", password: "password" };
      sinon.stub(User, "findOne").returns({
        select: sinon.stub().resolves(null),
      });

      await authController.loginUser(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
    });

    it("should handle invalid credentials (password mismatch)", async () => {
      const userData = {
        email: "test@example.com",
        password: "hashedPassword",
      };
      req.body = { email: "test@example.com", password: "wrongPassword" };
      sinon.stub(User, "findOne").returns({
        select: sinon.stub().resolves(userData),
      });
      sinon.stub(bcrypt, "compare").resolves(false);

      await authController.loginUser(req, res);

      expect(res.status.calledOnceWith(400)).to.be.true;
    });
    it("should return 500 for server error", async () => {
      const userData = {
        email: "test@example.com",
        password: "hashedPassword",
      };
      req.body = { email: "test@example.com", password: "wrongPassword" };
      sinon.stub(User, "findOne").returns({
        select: sinon.stub().rejects(new Error("Database error")),
      });

      // AWAIT the controller call.  This handles the rejected promise.
      await authController.loginUser(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      // expect(res.json.calledOnceWith({ message: 'Server error' , error})).to.be.true;
    });
  });
});
