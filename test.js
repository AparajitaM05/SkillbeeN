const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./app"); // Replace "./app" with the correct path to your Express app file.

chai.use(chaiHttp);
const expect = chai.expect;

describe("API Tests", () => {
  it("should return status 200 and valid HTML content", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.not.be.empty;
        done();
      });
  });

  it("should return 10 dynamic pages", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        const pageCount = (res.text.split("width: 1440px; height: 1118px; position: relative; background: white").length + 1)-2;
        expect(pageCount).to.equal(10);
        done();
      });
  });
});
