const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
