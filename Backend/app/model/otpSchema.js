const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const otpSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // auto delete after 5 minutes
  },
});

const otpModel = model("OTP", otpSchema);

module.exports = otpModel;
