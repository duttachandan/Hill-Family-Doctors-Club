const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },

  fees: {
    type: Number,
    required: true,
  },
  availableSlots: [
    {
      date: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
});

const doctorModel = mongoose.model("doctor", doctorSchema);

module.exports = doctorModel;
