let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const jwt = require("jsonwebtoken");
const generateToken = require("../../utils/generateToken"); // Adjust the path

describe("JWT Token Generation", () => {
  let signStub;

  beforeEach(() => {
    // Stub the jwt.sign method
    signStub = sinon.stub(jwt, "sign");
    process.env.JWT_SECRET = "test-secret"; // Set a test secret
  });

  afterEach(() => {
    sinon.restore();
    delete process.env.JWT_SECRET; // Clean up
  });

  it("should generate a valid JWT token", () => {
    const userId = "12345";
    const fakeToken = "fake-jwt-token";

    // Configure the stub to return a fake token
    signStub.returns(fakeToken);

    const token = generateToken(userId);

    expect(token).to.equal(fakeToken);
    expect(signStub.calledOnce).to.be.true;
    // Verify the arguments passed to jwt.sign (important!)
    expect(signStub.firstCall.args[0]).to.deep.equal({ id: userId });
    expect(signStub.firstCall.args[1]).to.equal(process.env.JWT_SECRET);
    expect(signStub.firstCall.args[2]).to.deep.equal({ expiresIn: "1d" });
  });

   it("should generate different tokens for different user IDs", () => {
        const userId1 = "user1";
        const userId2 = "user2";
        const fakeToken1 = "token1";
        const fakeToken2 = "token2";

        signStub.withArgs({ id: userId1 }, process.env.JWT_SECRET, { expiresIn: '1d' }).returns(fakeToken1);
        signStub.withArgs({ id: userId2 }, process.env.JWT_SECRET, { expiresIn: '1d' }).returns(fakeToken2);

        const token1 = generateToken(userId1);
        const token2 = generateToken(userId2);

        expect(token1).to.equal(fakeToken1);
        expect(token2).to.equal(fakeToken2);
        expect(token1).to.not.equal(token2);  // Ensure they are different
        expect(signStub.calledTwice).to.be.true;

    });
});