const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const appointmentSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  doctors: {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "doctors",
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    approve: {
      type: String,
      default: "pending",
      required: true,
    },
  },
});

const appointmentModel = model("appointment", appointmentSchema);

module.exports = appointmentModel;
