const express = require("express");
const router = express();
const protect = require("../middlewares/authMiddleware");
const admin = require("../middlewares/adminMiddleware");
const {
  // getDocumentStats,
  // getDocumentTypeDistribution,
  // getPIIStats,
  // getRecentActivities,
  getFullAdminAnalytics,
  // getAnalyticsData
  getDocumentMetrics,
  getAdminActivityLogs,
} = require("../controllers/analyticsController");

// User analytics routes
router.get("/user-metrics", protect, getDocumentMetrics);

//admin analytics routes
router.get("/admin/analytics/full", admin, getFullAdminAnalytics);
router.get("/admin/analytics/activity-logs", admin, getAdminActivityLogs);

module.exports = router;
