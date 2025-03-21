let chai;
let chaiHttp;
const server = require("../controllers/replaceChars"); ;

async function start(){
    chai  = await import('chai');
    const { default: chaiHttpModule } = await import('chai-http');
    chaiHttp = chaiHttpModule;
    chai.use(chaiHttp);  
     

}



describe("PII Detection and Replacement", function () {
    before(async()=>{
        await start();
    })
    it("should return an error if text parameter is missing", function (done) {
        chai.request(server)
            .post("/replaceChars") 
            .send({})
            .end((err, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res.body).to.have.property("error").eql("Text parameter is required");
                done();
            });
    });
    
    

//     // it("should return success: false if no PII is detected", function (done) {
//     //     const mockText = "This is just a regular sentence with no sensitive information.";
        
//     //     chai.request(server)
//     //         .post("/replaceChars")
//     //         .send({ text: mockText })
//     //         .end((err, res) => {
//     //             expect(res).to.have.status(200);
//     //             expect(res.body.success).to.be.false;
//     //             expect(res.body).to.have.property("message").eql("No PII data detected");
//     //             done();
//     //         });
//     // });

//     // it("should return encrypted text with PII replaced by asterisks", function (done) {
        
//     //     const mockText = "My email is john.doe@example.com and my phone number is 123-456-7890.";

//     //     chai.request(server)
//     //         .post("/replaceChars") 
//     //         .send({ text: mockText })
//     //         .end((err, res) => {
//     //             expect(res).to.have.status(200);
//     //             expect(res.body.success).to.be.true;
//     //             expect(res.body).to.have.property("encryptedText");

                
//     //             const encryptedText = res.body.encryptedText;
//     //             expect(encryptedText).to.include("john.doe@*****");
//     //             expect(encryptedText).to.include("123-456-****");

                
//     //             expect(res.body).to.have.property("newIndex").that.is.an("array");
//     //             expect(res.body.newIndex).to.be.an("array").that.is.not.empty;
//     //             done();
//     //         });
//     // });

//     // it("should return error if Python script execution fails", function (done) {
        
//     //     const mockText = "This text will fail due to Python script error.";

//     //     chai.request(server)
//     //         .post("/replaceChars") 
//     //         .send({ text: mockText })
//     //         .end((err, res) => {
//     //             expect(res).to.have.status(400);
//     //             expect(res.body).to.have.property("error").eql("An error occurred while processing your request");
//     //             done();
//     //         });
//     // });

});
