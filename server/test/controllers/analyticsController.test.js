// test/controllers/analyticsController.test.js
const sinon = require("sinon");
let chai;
let expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});

const analyticsController = require("../../controllers/analyticsController");
const Document = require("../../models/Document");
const User = require("../../models/User");
const dataModel = require("../../models/dataReceiver");
const ActivityLog = require("../../models/ActivityLog");
const mongoose = require("mongoose");

describe("Analytics Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { userId: "testUserId", query: {} };
    res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("getDocumentMetrics", () => {
    it("should return document metrics for the user", async () => {
      const userId = new mongoose.Types.ObjectId(); // Ensure ObjectId consistency
      req.userId = userId;

      const currentYear = new Date().getFullYear();
      const currentMonthStart = new Date(currentYear, new Date().getMonth(), 1);

      const totalDocuments = 50;
      const documentsThisMonth = 10;
      const documentUploadsPerMonth = [
        { _id: { month: 1 }, count: 5 }, // Corrected _id format
        { _id: { month: 2 }, count: 3 },
      ];
      const documentTypes = [
        { _id: "adhaar", count: 20 },
        { _id: "pan", count: 15 },
      ];

      // Stub countDocuments for total documents
      const countDocumentsStub = sinon.stub(Document, "countDocuments");
      countDocumentsStub.withArgs({ userId }).resolves(totalDocuments);
      countDocumentsStub
        .withArgs({ userId, uploadedAt: { $gte: currentMonthStart } })
        .resolves(documentsThisMonth);

      const aggregateStub = sinon.stub(Document, "aggregate");

      // Stub aggregate for document uploads per month
      aggregateStub
        .withArgs([
          {
            $match: {
              userId: userId, // Use the ObjectId
              uploadedAt: {
                $gte: new Date(currentYear, 0, 1),
                $lt: new Date(currentYear + 1, 0, 1),
              },
            },
          },
          {
            $group: {
              _id: { month: { $month: "$uploadedAt" } },
              count: { $sum: 1 },
            },
          },
        ])
        .resolves(documentUploadsPerMonth);

      // Stub aggregate for document type distribution
      aggregateStub
        .withArgs([
          { $match: { userId: userId } }, // Use the ObjectId
          { $group: { _id: "$documentType", count: { $sum: 1 } } },
        ])
        .resolves(documentTypes);

      await analyticsController.getDocumentMetrics(req, res);

      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;

      const responseData = res.json.args[0][0];
      expect(responseData.totalDocuments).to.equal(totalDocuments);
      expect(responseData.documentsThisMonth).to.equal(documentsThisMonth);
      expect(responseData.documentDate).to.deep.equal([
        5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
      expect(responseData.documentsProcessed).to.deep.equal({
        adhaar: 20,
        pan: 15,
        driving_license: 0,
        other: 0,
      });
      expect(responseData.savedVsDirectDownloads).to.deep.equal({
        saved: 0,
        directDownloads: 0,
      });
      expect(responseData.totalStorageUsed).to.equal(0);
    });

    it("should handle errors and return 500", async () => {
      req.userId = "testUserId";
      sinon.stub(Document, "countDocuments").rejects(new Error("Test error"));

      await analyticsController.getDocumentMetrics(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "Server error while fetching document metrics",
          error: "Test error",
        }),
      ).to.be.true;
    });
  });

  describe("getFullAdminAnalytics", () => {
    it("should return full admin analytics data", async () => {
      const totalUsers = 500;
      const totalDocuments = 1000;
      const maskedDocuments = 800;
      const sharedTexts = 200;
      const encryptedTexts = 150;
      const userGrowth = [{ _id: { month: 1, year: 2023 }, count: 10 }];
      const documentUploads = [{ _id: { month: 1, year: 2023 }, count: 20 }];
      const documentTypes = [{ _id: "pdf", count: 500 }];
      const dailyDocumentUploads = [
        { _id: { day: 1, month: 1, year: 2023 }, count: 5 },
      ];
      const userActivityByHour = [{ _id: { hour: 10 }, count: 50 }];
      const topActiveUsers = [
        {
          _id: "user1",
          documentCount: 100,
          user: { name: "User 1", email: "user1@example.com" },
        },
      ];

      sinon.stub(User, "countDocuments").resolves(totalUsers);
      const countDocumentsStub = sinon.stub(Document, "countDocuments");
      countDocumentsStub.onFirstCall().resolves(totalDocuments); // Total documents
      countDocumentsStub.onSecondCall().resolves(maskedDocuments); // Masked documents
      sinon.stub(dataModel, "countDocuments").resolves(sharedTexts);

      const aggregateStub = sinon.stub(Document, "aggregate");
      aggregateStub.onCall(0).resolves(documentUploads); // Document uploads (last 6 months)
      aggregateStub.onCall(1).resolves(documentTypes); // Document type distribution
      aggregateStub.onCall(2).resolves(dailyDocumentUploads); // Daily uploads
      aggregateStub.onCall(3).resolves(userActivityByHour); // User activity
      aggregateStub.onCall(4).resolves(topActiveUsers); // top Active users

      const userAggregateStub = sinon.stub(User, "aggregate");
      userAggregateStub.resolves(userGrowth);

      await analyticsController.getFullAdminAnalytics(req, res);

      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;

      const responseData = res.json.args[0][0];
      expect(responseData.totalUsers).to.equal(totalUsers);
      expect(responseData.totalDocuments).to.equal(totalDocuments);
      expect(responseData.maskedDocuments).to.equal(maskedDocuments);
      expect(responseData.sharedTexts).to.equal(sharedTexts);
      expect(responseData.encryptedTexts).to.equal(sharedTexts); // Corrected expectation
      expect(responseData.userGrowth).to.deep.equal(userGrowth);
      expect(responseData.documentUploads).to.deep.equal(documentUploads);
      expect(responseData.documentTypes).to.deep.equal(documentTypes);
      expect(responseData.dailyDocumentUploads).to.deep.equal(
        dailyDocumentUploads,
      );
      expect(responseData.userActivityByHour).to.deep.equal(userActivityByHour);
      expect(responseData.maskedVsUnmaskedRatio).to.deep.equal({
        masked: maskedDocuments,
        unmasked: totalDocuments - maskedDocuments,
      });
      expect(responseData.topActiveUsers).to.deep.equal(topActiveUsers);
    });

    it("should handle errors and return 500", async () => {
      sinon.stub(User, "countDocuments").rejects(new Error("Test error"));

      await analyticsController.getFullAdminAnalytics(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "Server error while fetching analytics",
          error: "Test error",
        }),
      ).to.be.true;
    });
  });

  describe("getAdminActivityLogs", () => {
    it("should return admin activity logs with pagination and optional email filter", async () => {
      const page = 1;
      const limit = 20;
      const email = "test@example.com";
      const totalLogs = 50;
      const activityLogs = [
        {
          _id: "log1",
          userId: { name: "User 1", email },
          documentId: { originalName: "doc1", documentType: "pdf" },
        },
      ];
      const mockUser = { _id: "testUserId" };

      req.query = { page, limit, email };

      // Correctly stub User.find().select()
      sinon.stub(User, "findOne").withArgs({ email }).returns(mockUser);

      // Correctly stub countDocuments
      sinon
        .stub(ActivityLog, "countDocuments")
        .withArgs({ userId: "testUserId" })
        .resolves(totalLogs);

      // Correctly stub ActivityLog.find() with chainable query methods
      // Stub ActivityLog.find() and chain methods properly
      sinon.stub(ActivityLog, "find").returns({
        sort: sinon.stub().returnsThis(),
        skip: sinon.stub().returnsThis(),
        limit: sinon.stub().returnsThis(),
        populate: sinon.stub().callsFake(function (path) {
          return path === "textId" ? Promise.resolve(activityLogs) : this;
        }),
      });

      await analyticsController.getAdminActivityLogs(req, res);

      expect(res.status.calledOnceWith(200)).to.be.true;
      const responseData = res.json.args[0][0];
      expect(responseData.activityLogs).to.deep.equal(activityLogs);
      expect(responseData.pagination).to.deep.equal({
        totalLogs,
        totalPages: 3,
        currentPage: page,
        hasMore: true,
      });
    });

    it("should return admin activity logs with pagination and no email filter", async () => {
      const page = 1;
      const limit = 20;
      const email = undefined; // No email filter
      const totalLogs = 50;
      const activityLogs = [
        {
          _id: "log1",
          userId: { name: "User 1", email },
          documentId: { originalName: "doc1", documentType: "pdf" },
        },
      ];
      req.query = { page, limit, email };

      // countDocuments should be called with an empty object when there's no email filter.
      sinon.stub(ActivityLog, "countDocuments").resolves(totalLogs);

      // Correctly stub ActivityLog.find() with chainable query methods
      // Stub ActivityLog.find() and chain methods properly
      sinon.stub(ActivityLog, "find").returns({
        sort: sinon.stub().returnsThis(),
        skip: sinon.stub().returnsThis(),
        limit: sinon.stub().returnsThis(),
        populate: sinon.stub().callsFake(function (path) {
          return path === "textId" ? Promise.resolve(activityLogs) : this;
        }),
      });

      await analyticsController.getAdminActivityLogs(req, res);

      expect(res.status.calledOnceWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      const responseData = res.json.args[0][0];
      expect(responseData.activityLogs).to.deep.equal(activityLogs);
      expect(responseData.pagination).to.deep.equal({
        totalLogs,
        totalPages: 3,
        currentPage: page,
        hasMore: true,
      });
    });

    it("should handle errors and return 500", async () => {
      const page = 1;
      const limit = 20;
      const email = undefined; // No email filter

      req.query = { page, limit, email };
      sinon
        .stub(ActivityLog, "countDocuments")
        .rejects(new Error("Test error"));

      await analyticsController.getAdminActivityLogs(req, res);

      expect(res.status.calledOnceWith(500)).to.be.true;
      expect(
        res.json.calledOnceWith({
          message: "Server error while fetching activity logs",
          error: "Test error",
        }),
      ).to.be.true;
    });
  });
});
