const express = require("express");
const router = express();
const adminController = require("../controllers/adminController");
const adminAuthMiddleware = require("../middlewares/adminMiddleware");

// Admin authentication
router.post("/signin", adminController.login);

// Protected admin routes for tickets
router.get("/tickets", adminAuthMiddleware, adminController.getSupportTickets);
router.put(
  "/tickets/:ticketId/status",
  adminAuthMiddleware,
  adminController.updateTicketStatus,
);

module.exports = router;
