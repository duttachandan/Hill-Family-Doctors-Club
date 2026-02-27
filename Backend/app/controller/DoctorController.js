const mongoose = require("mongoose");
const doctorSchema = require("../model/doctorSchema");
const ExpressError = require("../utils/ExpressError");
const { DoctorSchemaValidator } = require("../utils/JoiValidation");

class DoctorController {
  async getAllDoctors(req, res) {
    const doctorList = await doctorSchema.find({});
    console.log(doctorList);
    res.json(doctorList);
  }

  // Admin Routes
  async createDoctor(req, res) {
    const { name, specialization, fees, availableSlots } = req.body;
    const payload = {
      name,
      specialization,
      fees,
      availableSlots,
    };
    const { error } = await DoctorSchemaValidator.validate(payload);
    if (error) throw new ExpressError(404, error.message);

    const doctorDetails = doctorSchema(payload);

    const addDoctor = await doctorDetails.save();
    if (!addDoctor) throw ExpressError(404, addDoctor?.message || addDoctor);
    res.json(addDoctor);
  }

  async DeleteDoctor(req, res) {
    const { id } = req.params;
    const deleteData = await doctorSchema.findByIdAndDelete(id);
    if (!deleteData) throw new ExpressError(404, "no data found to delete");
    res.json({
      success: true,
      message: "data deleted Successfully",
    });
  }

  async EditDoctor(req, res) {
    const { id } = req.params;
    const { name, specialization, fees, availableSlots } = req.body;
    if (!id) throw new ExpressError(404, "no id found");
    const payload = {
      name,
      specialization,
      fees,
      availableSlots,
    };
    console.log(payload);
    const { error } = await DoctorSchemaValidator.validate(payload);
    if (error) throw new ExpressError(404, error.message);
    const updateData = await doctorSchema.findByIdAndUpdate(id, payload);
    console.log(updateData);
    if (!updateData) throw new ExpressError(404, updateData.message);
    res.json(updateData);
  }

  async ReqDoctorAppointment(req, res) {
    const { id, userId } = req.params;
    if (!id) throw new ExpressError(404, "No id Found");
    console.log(id, userId);
  }
}

module.exports = new DoctorController();
