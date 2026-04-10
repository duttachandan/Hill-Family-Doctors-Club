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
  experience: {
    type: Number,
    required: true
  },
  center: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
    default: 'https://res.cloudinary.com/douzjjrn3/image/upload/v1775814811/dr-shantanu-jambhekar-prosthodontist-mumbai-a2020481-aa2b-412f-9ee5-2c74ebd532b4.jpg_i6d3od.png'
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
