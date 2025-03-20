const Admin = require("../models/Admin");
const Ticket = require("../models/Ticket");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ActivityLog = require("../models/ActivityLog");
// Admin Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const hashedPassword = admin.password;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.json({
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get Support Tickets
exports.getSupportTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update Ticket Status
exports.updateTicketStatus = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status, updatedAt: new Date() },
      { new: true },
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.usersLogs = async (req, res) => {
  try {
    const userslog = await ActivityLog.find();
    res.status(200).json(userslog);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
