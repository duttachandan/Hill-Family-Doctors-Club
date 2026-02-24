const mongoose = require("mongoose");
const doctorSchema = require("../model/doctorSchema");
const ExpressError = require("../utils/ExpressError");

class DoctorController {
  async getAllDoctors(req, res) {
    const doctorList = await doctorSchema.find({});
    console.log(doctorList);
    res.json(doctorList);
  }
  // Admin Routes
  async createDoctor(req, res) {
    const { name, specialization, fees, availableSlots } = req.body;
    if (!name || !specialization || !fees || !availableSlots)
      throw new ExpressError(404, "Enter all the field properly");
    const doctorDetails = doctorSchema({
      name,
      specialization,
      fees,
      availableSlots,
    });

    const addDoctor = await doctorDetails.save();
    if (!addDoctor) throw ExpressError(404, addDoctor?.message || addDoctor);
    res.json(addDoctor);
  }
  async DeleteDoctor(req, res) {}
}

module.exports = new DoctorController();
