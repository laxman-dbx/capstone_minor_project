// test/middlewares/socketAuth.test.js
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const jwt = require("jsonwebtoken");
const socketAuth = require("../../middlewares/socketAuth"); // Adjust path

describe("socketAuth Middleware", () => {
  let socket, next;

  beforeEach(() => {
    socket = {
      handshake: {
        auth: {},
      },
    };
    next = sinon.spy();
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should authenticate a valid token", () => {
    const userData = { id: "user123", username: "testuser" };
    const token = jwt.sign(userData, process.env.JWT_SECRET);
    socket.handshake.auth.token = token;

    socketAuth(socket, next);

    expect(next.calledOnce).to.be.true;
    expect(next.calledWithExactly()).to.be.true; // Verify next() is called with no arguments
  });

  it("should return an error if no token is provided", () => {
    socketAuth(socket, next);

    expect(next.calledOnce).to.be.true;
    expect(next.args[0][0]).to.be.instanceOf(Error);
    expect(next.args[0][0].message).to.equal("Authentication error");
    expect(socket.user).to.be.undefined; // Ensure user is not set
  });

  it("should return an error for an invalid token", () => {
    const jwtVerifyStub = sinon
      .stub(jwt, "verify")
      .throws(new Error("jwt malformed"));

    socket.handshake.auth.token = "invalid-token";

    socketAuth(socket, next);

    expect(next.calledOnce).to.be.true;
    expect(next.args[0][0]).to.be.instanceOf(Error);
    expect(next.args[0][0].message).to.equal("Authentication error");
    expect(socket.user).to.be.undefined;
  });
});
