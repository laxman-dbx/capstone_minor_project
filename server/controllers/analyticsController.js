const Document = require("../models/Document");
const mongoose = require("mongoose");
const User = require("../models/User");
const dataModel = require("../models/dataReceiver");
const ActivityLog = require("../models/ActivityLog");

//Get document usage metrics for the current user
exports.getDocumentMetrics = async (req, res) => {
  try {
    const userId = req.userId;
    const currentYear = new Date().getFullYear();
    const currentMonthStart = new Date(currentYear, new Date().getMonth(), 1);

    // Get total documents
    const totalDocuments = await Document.countDocuments({ userId });

    // Get documents uploaded this month
    const documentsThisMonth = await Document.countDocuments({
      userId,
      uploadedAt: { $gte: currentMonthStart },
    });

    // Get document uploads per month (12 values for current year)
    const documentUploadsPerMonth = await Document.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          uploadedAt: {
            $gte: new Date(currentYear, 0, 1), // Start of the current year
            $lt: new Date(currentYear + 1, 0, 1), // Start of next year
          },
        },
      },
      {
        $group: {
          _id: { month: { $month: "$uploadedAt" } },
          count: { $sum: 1 },
        },
      },
    ]);
    // Convert aggregation result to a 12-element array with 0s where necessary
    const documentDate = Array(12).fill(0);
    documentUploadsPerMonth.forEach((doc) => {
      documentDate[doc._id.month - 1] = doc.count; // Months are 1-based, so subtract 1 for zero-based index
    });
    // Get document type distribution
    const documentTypes = await Document.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: "$documentType", count: { $sum: 1 } } },
    ]);

    const documentsProcessed = {
      adhaar: 0,
      pan: 0,
      driving_license: 0,
      other: 0,
    };

    documentTypes.forEach((doc) => {
      documentsProcessed[doc._id] = doc.count || 0;
    });

    // Placeholder values for saved vs direct downloads (Assuming these are tracked in another way)
    const savedVsDirectDownloads = {
      saved: 0, // This should be fetched from relevant tracking data
      directDownloads: 0, // This should be fetched from relevant tracking data
    };

    // Placeholder for total storage used (assuming document sizes are tracked elsewhere)
    const totalStorageUsed = 0; // This should be calculated based on stored document sizes

    res.status(200).json({
      totalDocuments,
      documentsThisMonth,
      documentDate, // Now correctly represents 12 months
      documentsProcessed,
      savedVsDirectDownloads,
      totalStorageUsed,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while fetching document metrics",
      error: error.message,
    });
  }
};

/**
 * Get full admin analytics data
 */
exports.getFullAdminAnalytics = async (req, res) => {
  try {
    // Total users
    const totalUsers = await User.countDocuments();

    // Total documents
    const totalDocuments = await Document.countDocuments();

    // Total masked documents (count where maskedFileName is not null)
    const maskedDocuments = await Document.countDocuments();

    // Total shared texts
    const sharedTexts = await dataModel.countDocuments();

    // Total encrypted texts
    const encryptedTexts = await dataModel.countDocuments();

    // User growth (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const userGrowth = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    // Document uploads (last 6 months)
    const documentUploads = await Document.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    // Document type distribution
    const documentTypes = await Document.aggregate([
      { $group: { _id: "$documentType", count: { $sum: 1 } } },
    ]);

    // Daily document uploads (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const dailyDocumentUploads = await Document.aggregate([
      {
        $match: {
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            day: { $dayOfMonth: "$createdAt" },
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
    ]);

    // User activity by hour of day
    const userActivityByHour = await Document.aggregate([
      {
        $group: {
          _id: { hour: { $hour: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.hour": 1 } },
    ]);

    // Masked vs Unmasked documents ratio
    const maskedVsUnmaskedRatio = {
      masked: maskedDocuments,
      unmasked: totalDocuments - maskedDocuments,
    };

    // Top active users (users with most documents)
    const topActiveUsers = await Document.aggregate([
      {
        $group: {
          _id: "$userId",
          documentCount: { $sum: 1 },
        },
      },
      { $sort: { documentCount: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $project: {
          _id: 1,
          documentCount: 1,
          user: { $arrayElemAt: ["$userDetails", 0] },
        },
      },
      {
        $project: {
          _id: 1,
          documentCount: 1,
          "user.name": 1,
          "user.email": 1,
        },
      },
    ]);

    res.status(200).json({
      totalUsers,
      totalDocuments,
      maskedDocuments,
      sharedTexts,
      encryptedTexts,
      userGrowth,
      documentUploads,
      documentTypes,
      dailyDocumentUploads,
      userActivityByHour,
      maskedVsUnmaskedRatio,
      topActiveUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while fetching analytics",
      error: error.message,
    });
  }
};

/**
 * Get admin activity logs for all users
 */
exports.getAdminActivityLogs = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const email = req.query.email; // Optional filter by user
  try {
    let userId;
    // Build query
    if (email) {
      const user = await User.findOne({ email });
      userId = user._id;
    }

    const query = userId ? { userId } : {};
    // Get total count for pagination
    const totalLogs = await ActivityLog.countDocuments(query);

    // Get activity logs with pagination
    const activityLogs = await ActivityLog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("userId", "name email")
      .populate("documentId", "originalName documentType")
      .populate("textId");

    res.status(200).json({
      activityLogs,
      pagination: {
        totalLogs,
        totalPages: Math.ceil(totalLogs / limit),
        currentPage: page,
        hasMore: page < Math.ceil(totalLogs / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while fetching activity logs",
      error: error.message,
    });
  }
};
