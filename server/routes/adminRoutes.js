const express = require('express');
const router = express();
const adminController = require('../controllers/adminController');
const adminAuthMiddleware = require('../middlewares/adminMiddleware');
// Admin authentication
router.post('/signin', adminController.login);

// Protected admin routes
router.get('/analytics/documents', adminAuthMiddleware, adminController.getDocumentAnalytics);
router.get('/tickets', adminAuthMiddleware, adminController.getSupportTickets);
router.post('/tickets/:ticketId/reply', adminAuthMiddleware, adminController.replyToTicket);
router.put('/tickets/:ticketId/status', adminAuthMiddleware, adminController.updateTicketStatus);

module.exports = router;