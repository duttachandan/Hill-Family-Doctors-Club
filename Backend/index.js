require("dotenv").config();
const express = require("express");
const app = express();

// Mongodb Conection
const DBConnect = require("./app/db/DBConnect");
DBConnect();

// rate limiter
const limiter = require("./app/utils/rateLimit");
app.use(limiter);

// helmet
const helmet = require("helmet");
app.use(helmet());

// JSON Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// api routes
const authRoutes = require("./app/routes/authRoutes");
app.use("/api", authRoutes);

// 404 error handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err.statusCode, err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "some errors occured",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`your site is live at http://localhost:${PORT}`);
});
