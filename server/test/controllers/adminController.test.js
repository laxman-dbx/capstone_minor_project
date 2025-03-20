// test/controllers/adminController.test.js

const sinon = require("sinon");
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});

const adminController = require("../../controllers/adminController");
const Admin = require("../../models/Admin");
const Ticket = require("../../models/Ticket");
const ActivityLog = require("../../models/ActivityLog");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

describe("Admin Controller", () => {
  let req, res, next;

  beforeEach(() => {
    // Mock request, response, and next objects
    req = {
      body: {},
      params: {},
      query: {},
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    next = sinon.stub();
  });

  afterEach(() => {
    sinon.restore(); // Restore all stubs after each test
  });

  describe("login", () => {
    it("should successfully log in an admin", async () => {
      const adminData = {
        _id: "adminId",
        email: "admin@example.com",
        password: "hashedPassword",
      };
      req.body = { email: "admin@example.com", password: "password" };

      const findOneStub = sinon.stub(Admin, "findOne").resolves(adminData);
      const compareStub = sinon.stub(bcrypt, "compare").resolves(true);
      const signStub = sinon.stub(jwt, "sign").returns("mockedToken");

      await adminController.login(req, res);

      expect(findOneStub.calledOnceWith({ email: "admin@example.com" })).to.be
        .true;
      expect(compareStub.calledOnceWith("password", "hashedPassword")).to.be
        .true;
      expect(signStub.calledOnce).to.be.true;
      expect(res.json.calledOnceWith({ token: "mockedToken" })).to.be.true;
    });

    it("should return 401 for invalid credentials (admin not found)", async () => {
      req.body = { email: "admin@example.com", password: "password" };
      sinon.stub(Admin, "findOne").resolves(null);

      await adminController.login(req, res);

      expect(res.status.calledOnceWith(401)).to.be.true;
      expect(res.json.calledOnceWith({ message: "Invalid credentials" })).to.be
        .true;
    });

    it("should return 401 for invalid credentials (password mismatch)", async () => {
      const adminData = {
        email: "admin@example.com",
        password: "hashedPassword",
      };
      req.body = { email: "admin@example.com", password: "wrongPassword" };
      sinon.stub(Admin, "findOne").resolves(adminData);
      sinon.stub(bcrypt, "compare").resolves(false);

      await adminController.login(req, res);

      expect(res.status.calledOnceWith(401)).to.be.true;
      expect(res.json.calledOnceWith({ message: "Invalid credentials" })).to.be
        .true;
    });

    it("should return 500 for server error", async () => {
      req.body = { email: "admin@example.com", password: "password" };
      sinon.stub(Admin, "findOne").rejects(new Error("Database error"));

      // AWAIT the controller call.  This handles the rejected promise.
      await adminController.login(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      // expect(res.json.calledOnceWith({ message: 'Server error' , error})).to.be.true;
    });
  });

  describe("getSupportTickets", () => {
    it("should return support tickets", async () => {
      const mockTickets = [
        {
          _id: "ticket1",
          user: { name: "User 1", email: "user1@example.com" },
          userId: "user1",
          issue: "Issue 1",
        },
        {
          _id: "ticket2",
          user: { name: "User 2", email: "user2@example.com" },
          userId: "user2",
          issue: "Issue 2",
        },
      ];

      const findStub = sinon.stub(Ticket, "find").returns({
        populate: sinon.stub().returnsThis(),
        sort: sinon.stub().resolves(mockTickets),
      });

      await adminController.getSupportTickets(req, res);

      expect(findStub.calledOnce).to.be.true;
      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnceWith(mockTickets)).to.be.true;
    });

    it("should return 500 for server error", async () => {
      sinon.stub(Ticket, "find").returns({
        populate: sinon.stub().returnsThis(),
        sort: sinon.stub().rejects(new Error("Database error")),
      });

      await adminController.getSupportTickets(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      //   expect(res.json.calledOnceWith({ message: 'Server error' , error})).to.be.true;
    });
  });

  describe("updateTicketStatus", () => {
    it("should update ticket status", async () => {
      const ticketId = "ticket1";
      const status = "resolved";
      const mockTicket = { _id: ticketId, status: "open" };

      req.params = { ticketId };
      req.body = { status };

      sinon.stub(Ticket, "findByIdAndUpdate").resolves(mockTicket);

      await adminController.updateTicketStatus(req, res);

      expect(
        Ticket.findByIdAndUpdate.calledOnceWith(
          ticketId,
          { status, updatedAt: sinon.match.date },
          { new: true },
        ),
      ).to.be.true;
      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnceWith(mockTicket)).to.be.true;
    });

    it("should return 404 if ticket not found", async () => {
      const ticketId = "nonexistentTicket";
      const status = "resolved";

      req.params = { ticketId };
      req.body = { status };

      sinon.stub(Ticket, "findByIdAndUpdate").resolves(null);

      await adminController.updateTicketStatus(req, res);

      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith({ message: "Ticket not found" })).to.be
        .true;
    });

    it("should return 500 for server error", async () => {
      const ticketId = "ticket1";
      const status = "resolved";

      req.params = { ticketId };
      req.body = { status };

      sinon
        .stub(Ticket, "findByIdAndUpdate")
        .rejects(new Error("Database error"));

      await adminController.updateTicketStatus(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      //expect(res.json.calledOnceWith({ message: 'Server error', error })).to.be.true;
    });
  });

  describe("usersLogs", () => {
    it("should return users logs", async () => {
      const mockLogs = [{ log: "log1" }, { log: "log2" }];

      sinon.stub(ActivityLog, "find").resolves(mockLogs);

      await adminController.usersLogs(req, res);

      expect(ActivityLog.find.calledOnce).to.be.true;
      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnceWith(mockLogs)).to.be.true;
    });

    it("should return 500 for server error", async () => {
      sinon.stub(ActivityLog, "find").rejects(new Error("Database error"));

      await adminController.usersLogs(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      //   expect(res.json.calledOnceWith({ message: 'Server error' , error})).to.be.true;
    });
  });
});
