require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Mongodb Conection
const DBConnect = require("./app/db/DBConnect");
DBConnect();

// JSON Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Auth routes
const authRoutes = require("./app/routes/authRoutes");
app.use("/auth", authRoutes);

// global error handler
app.use((err, req, res) => {
  res.status(err.statusCode).json(err.messages);
});

app.listen(PORT, () => {
  console.log(`your site is live at https://localhost:${PORT}`);
});
