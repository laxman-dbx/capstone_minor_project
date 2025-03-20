const Notification = require("../models/Notification");

/**
 * Create a new notification
 * @param {string} userId - User ID to send notification to
 * @param {string} title - Notification title
 * @param {string} type - Type of notification (message_encrypted, message_decrypted, support_response)
 * @param {Object} metadata - Additional metadata (messageId or ticketId)
 * @returns {Promise<Object>} Created notification
 */
const createNotification = async (userId, title, type, metadata = {}) => {
  try {
    const notification = new Notification({
      userId,
      title,
      type,
      metadata,
    });

    await notification.save();
    // Here you could add real-time notification using Socket.io
    return notification;
  } catch (error) {
    console.error("Error creating notification:", error);
    return null;
  }
};

const markAsRead = async (notificationId) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true },
    );
    return notification;
  } catch (error) {
    console.error("Error marking notification as read:", error);
    return null;
  }
};

module.exports = { createNotification, markAsRead };
