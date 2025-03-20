const sinon = require("sinon");
const { PythonShell } = require("python-shell");
const detectPii = require("../controllers/detectPii");
let chai;
before(async()=>{
  chai=await import('chai');
})


describe("PII Detection Function", function () {
  afterEach(function () {
    sinon.restore();
  });

  it("should return an error if text parameter is missing", async function () {
    const result = await detectPii();
    chai.expect(result).to.deep.equal({error: "Text parameter is required" });
  });

  it("should return success: false if no PII is detected", async function () {
    sinon.stub(PythonShell, "run").resolves(["No entities detected."]);
    const result = await detectPii("This is a test message.");
    chai.expect(result).to.deep.equal({ success: false, error: "Text contains no PII data" });
  });

  it("should return parsed PII data if detected", async function () {
    const pythonResponse = ["{'name': 'John Doe', 'email': 'john@example.com'}"];
    sinon.stub(PythonShell, "run").resolves(pythonResponse);
    const result = await detectPii("John Doe's email is john@example.com");
    chai.expect(result).to.deep.equal({ name: "John Doe", email: "john@example.com" });
  });

  it("should return an error when Python script execution fails", async function () {
    sinon.stub(PythonShell, "run").rejects(new Error("Python execution error"));
    const result = await detectPii("Some input text");
    chai.expect(result).to.deep.equal({
      error: "Error executing Python script",
      details: "Python execution error",
    });
  });
});
