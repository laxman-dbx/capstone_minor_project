// test/middlewares/adminAuth.test.js
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const jwt = require("jsonwebtoken");

const Admin = require("../../models/Admin"); // Adjust path as needed
const adminAuth = require("../../middlewares/adminMiddleware"); // Adjust path

describe("adminAuth Middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      headers: {},
    };
    res = {
      status: sinon.stub().returnsThis(), // Chainable status
      json: sinon.spy(),
    };
    next = sinon.spy();
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should authorize a valid admin", async () => {
    const adminData = { _id: "admin123", username: "admin", role: "admin" };
    const token = jwt.sign(
      { id: adminData._id, role: "admin" },
      process.env.JWT_SECRET,
    );
    req.headers.authorization = `Bearer ${token}`;

    // Mock Admin.findById to return a valid admin
    const findByIdStub = sinon.stub(Admin, "findById").resolves(adminData);

    await adminAuth(req, res, next);

    expect(findByIdStub.calledOnceWithExactly(adminData._id)).to.be.true;
    expect(next.calledOnce).to.be.true;
  });

  it("should return 401 if no authorization header", async () => {
    await adminAuth(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(res.json.calledOnceWith({ message: "Unauthorized" })).to.be.true;
    expect(next.called).to.be.false;
  });

  it("should return 401 if authorization header is not Bearer", async () => {
    req.headers.authorization = "Basic some-token";

    await adminAuth(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(res.json.calledOnceWith({ message: "Unauthorized" })).to.be.true;
    expect(next.called).to.be.false;
  });
  it("should return 403 if user is not an admin", async () => {
    const token = jwt.sign(
      { id: "user123", role: "user" },
      process.env.JWT_SECRET,
    );
    req.headers.authorization = `Bearer ${token}`;
    sinon.stub(Admin, "findById").resolves(null); // No admin found.

    await adminAuth(req, res, next);

    expect(res.status.calledOnceWith(403)).to.be.true;
    expect(res.json.calledOnceWith({ message: "Access denied" })).to.be.true;
    expect(next.called).to.be.false; // Make sure to add this line
  });

  it("should return 401 if admin is not found", async () => {
    const token = jwt.sign(
      { id: "admin123", role: "admin" },
      process.env.JWT_SECRET,
    );
    req.headers.authorization = `Bearer ${token}`;

    // Mock Admin.findById to return null (admin not found)
    sinon.stub(Admin, "findById").resolves(null);

    await adminAuth(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;

    expect(next.called).to.be.false;
  });

  it("should return 401 for invalid token", async () => {
    req.headers.authorization = "Bearer invalid-token";

    await adminAuth(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(res.json.called).to.be.true; // Don't check the exact message, it can vary
    expect(next.called).to.be.false;
  });

  it("should handle JWT verification errors", async () => {
    req.headers.authorization = "Bearer invalid-token";
    const jwtVerifyStub = sinon
      .stub(jwt, "verify")
      .throws(new Error("jwt malformed"));

    await adminAuth(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(res.json.called).to.be.true; // Check that json was called
    expect(next.called).to.be.false;
  });
});
