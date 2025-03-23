let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});
const sinon = require("sinon");
const crypto = require("crypto");
const { generateRSAKeyPair } = require("../../utils/generateRSAKeyPair"); // Adjust the path

describe("RSA Key Pair Generation", () => {
  let generateKeyPairStub;
  let consoleErrorStub;

  beforeEach(() => {
    generateKeyPairStub = sinon.stub(crypto, "generateKeyPair");
    consoleErrorStub = sinon.stub(console, "error");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should generate a valid RSA key pair", async () => {
    const fakePublicKey = "fake-public-key";
    const fakePrivateKey = "fake-private-key";

    // Make the stub call the callback with (null, publicKey, privateKey)
    generateKeyPairStub.callsArgWith(2, null, fakePublicKey, fakePrivateKey);

    const { publicKey, privateKey } = await generateRSAKeyPair();

    expect(publicKey).to.equal(fakePublicKey);
    expect(privateKey).to.equal(fakePrivateKey);
    expect(generateKeyPairStub.calledOnce).to.be.true;
    // Check parameters (optional, but good for thoroughness)
    expect(generateKeyPairStub.firstCall.args[0]).to.equal("rsa");
    expect(generateKeyPairStub.firstCall.args[1]).to.deep.equal({
      modulusLength: 2048,
      publicKeyEncoding: { type: "spki", format: "pem" },
      privateKeyEncoding: { type: "pkcs8", format: "pem" },
    });
  });

  it("should handle errors during key generation", async () => {
    const error = new Error("Key generation failed");

    // Make the stub call the callback with (error)
    generateKeyPairStub.callsArgWith(2, error);

    try {
      await generateRSAKeyPair();
      expect.fail("Should have thrown an error"); // Force fail if no error
    } catch (err) {
      expect(err.message).to.equal("Key generation failed");
      expect(consoleErrorStub.calledOnce).to.be.true;
      expect(consoleErrorStub.args[0][1]).to.deep.equal(error);
    }
    expect(generateKeyPairStub.calledOnce).to.be.true;
  });
});
