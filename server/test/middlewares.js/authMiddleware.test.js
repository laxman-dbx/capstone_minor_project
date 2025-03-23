// test/middlewares/protect.test.js
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const jwt = require("jsonwebtoken");
const protect = require("../../middlewares/authMiddleware"); //Adjust the path to your protect middleware

describe("auth Middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = { headers: {} };
    res = {
      status: sinon.stub().returnsThis(), // For chaining
      json: sinon.spy(),
    };
    next = sinon.spy();
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should authorize a valid token", async () => {
    const userId = "user123";
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
    req.headers.authorization = `Bearer ${token}`;

    await protect(req, res, next);

    expect(req.userId).to.equal(userId);
    expect(next.calledOnce).to.be.true;
    expect(res.status.called).to.be.false;
    expect(res.json.called).to.be.false;
  });

  it("should return 401 if no authorization header", async () => {
    await protect(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(
      res.json.calledOnceWith({ message: "No token, authorization denied" }),
    ).to.be.true;
    expect(next.called).to.be.false;
  });

  it("should return 401 if no token is provided", async () => {
    req.headers.authorization = "Bearer ";
    await protect(req, res, next);
    expect(res.status.calledOnceWith(401)).to.be.true;
  });

  it("should return 401 if authorization header is not Bearer", async () => {
    req.headers.authorization = "Basic some-token";

    await protect(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(
      res.json.calledOnceWith({ message: "No token, authorization denied" }),
    ).to.be.true;
    expect(next.called).to.be.false;
  });

  it("should return 401 for an invalid token", async () => {
    req.headers.authorization = "Bearer invalid-token";

    await protect(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(res.json.called).to.be.true;
    expect(next.called).to.be.false;
  });

  it("should handle JWT verification errors", async () => {
    req.headers.authorization = "Bearer invalid-token";
    const jwtVerifyStub = sinon
      .stub(jwt, "verify")
      .throws(new Error("jwt malformed"));

    await protect(req, res, next);

    expect(res.status.calledOnceWith(401)).to.be.true;
    expect(res.json.called).to.be.true; // Check that json was called
    expect(next.called).to.be.false;
  });
});
