require("dotenv").config();
const express = require("express");
const app = express();

// Mongodb Conection
const DBConnect = require("./app/db/DBConnect");
DBConnect();

// JSON Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Auth routes
const authRoutes = require("./app/routes/authRoutes");
app.use("/api", authRoutes);

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
  console.log(`your site is live at https://localhost:${PORT}`);
});
