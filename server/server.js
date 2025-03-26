const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const connectDB = require("./config/db");
const path = require("path");

//import routes
const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes.js");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

//call mongo conect
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Configure CORS with more options
const corsOptions = {
  origin: [
    "http://localhost:5000",
    "http://127.0.0.1:5000",
    "http://localhost:4200",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  maxAge: 86400, // 24 hours
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: [
      "http://localhost:5000",
      "http://127.0.0.1:5000",
      "http://localhost:4200",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  },
  pingTimeout: 60000, // 60 seconds
  pingInterval: 25000, // 25 seconds
  transports: ["websocket", "polling"],
});

// Socket.io setup
require("./socket")(io);

//using the routes
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/analytics", analyticsRoutes);

//frontend hosting in backend
app.use(
  express.static(path.join(__dirname, "../client/dist/dms-client/browser")),
);
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/dist/dms-client/browser", "index.html"),
  );
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
