const mongoose = require("mongoose");
const doctorSchema = require("../model/doctorSchema");
const ExpressError = require("../utils/ExpressError");
const { DoctorSchemaValidator } = require("../utils/JoiValidation");
const userModel = require("../model/userSchema");
const appointmentModel = require("../model/appointmentSchema");

class DoctorController {
  async getAllDoctors(req, res) {
    const doctorList = await doctorSchema.find({});
    res.json(doctorList);
  }

  async ReqDoctorAppointment(req, res) {
    const { email } = req.user;
    const { id } = req.params;
    if (!id || !email)
      throw new ExpressError(
        404,
        "user credential or doctor credential not found",
      );
    const foundDoctorId = await doctorSchema.findById(id);
    if (!foundDoctorId)
      throw new ExpressError(404, "no doctor found on this id");
    res.json(foundDoctorId);
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

  async ReqAppointment(req, res) {
    const decode = req.user;
    const { email } = decode;
    const { doctor, time, date } = req.body;
    if (!email || !doctor || !time || !date) {
      throw new ExpressError("Enter all the field Correctly");
    }
    const { _id } = await userModel.findOne({ email });
    const doctorAppoinmentDetails = appointmentModel({
      user: _id,
      doctors: {
        doctor: doctor,
        time: time,
        date: date,
        approve: "pending",
      },
    });
    const submitAppointment = await doctorAppoinmentDetails.save();
    res.json(submitAppointment);
  }

  async PendingAppoinment(req, res) {
    const allData = await appointmentModel.find({
      "doctors.approve": "pending",
    });
    res.json(allData);
  }

  async approveAppoinment(req, res) {
    const { id } = req.params;
    console.log(id);
    const data = await appointmentModel.findByIdAndUpdate(
      id,
      { $set: { "doctors.approve": "approved" } },
      { new: true },
    );
    if (!data) {
      throw new ExpressError(404, "appoinment approved failed");
    }
    res.json(data);
  }

  async rejectAppoinment(req, res) {
    const { id } = req.params;
    console.log(id);
    const data = await appointmentModel.findByIdAndUpdate(
      id,
      { $set: { "doctors.approve": "rejected" } },
      { new: true },
    );
    if (!data) {
      throw new ExpressError(404, "appoinment approved failed");
    }
    res.json(data);
  }
}

module.exports = new DoctorController();
