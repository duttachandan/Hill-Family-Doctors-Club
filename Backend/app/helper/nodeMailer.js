require("dotenv").config();
const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  pool: true,
  maxConnections: 5, // Maximum number of simultaneous connections (default: 5)
  maxMessages: 100, // Messages per connection before reconnecting (default: 100)
  auth: {
    user: process.env.EMAIL_KEY,
    pass: process.env.EMAIL_PASS_KEY,
  },
});

module.exports = transporter;
