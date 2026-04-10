const express = require("express");
const Router = express.Router();
const { verifyAdminToken, verifyAccessToken } = require("../utils/token");

const AuthController = require("../controller/AuthController");
const wrapAsync = require("../utils/WrapAsync");
const DoctorController = require("../controller/DoctorController");

const ImageUploader = require('../utils/ImageCloudinary');

// user Login
Router.post("/login", wrapAsync(AuthController.login));
Router.post("/register", wrapAsync(AuthController.signin));
Router.post("/generateotp", wrapAsync(AuthController.generateOtp));

// Admin Login
Router.post("/adminlogin", wrapAsync(AuthController.adminLogin));


// user and admin refreshToken
Router.get("/refreshtoken", wrapAsync(AuthController.refreshToken));


// Doctor Modules
Router.get("/doctors", wrapAsync(DoctorController.getAllDoctors));



// user only Routes
Router.get(
  "/appointment/:id",
  verifyAccessToken,
  wrapAsync(DoctorController.ReqDoctorAppointment),
);

Router.post(
  "/appointment/doctor",
  verifyAccessToken,
  wrapAsync(DoctorController.ReqAppointment),
);



// Admin Only Routes
Router.post(
  "/createdoctors",
  ImageUploader.single('Image'),
  verifyAdminToken,
  wrapAsync(DoctorController.createDoctor),
);

Router.get(
  "/deletedoctor/:id",
  verifyAdminToken,
  wrapAsync(DoctorController.DeleteDoctor),
);

Router.post(
  "/editdoctor/:id",
  verifyAdminToken,
  wrapAsync(DoctorController.EditDoctor),
);

Router.post(
  "/appointment/pending",
  verifyAdminToken,
  wrapAsync(DoctorController.PendingAppoinment),
);

Router.get(
  "/appointment/approve/:id",
  verifyAdminToken,
  wrapAsync(DoctorController.approveAppoinment),
);

Router.get(
  "/appointment/rejected/:id",
  verifyAdminToken,
  wrapAsync(DoctorController.rejectAppoinment),
);

module.exports = Router;
