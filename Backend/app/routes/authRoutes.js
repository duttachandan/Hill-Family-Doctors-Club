const express = require("express");
const Router = express.Router();
const { verifyAdminToken, verifyAccessToken } = require("../utils/token");

const AuthController = require("../controller/AuthController");
const wrapAsync = require("../utils/WrapAsync");
const DoctorController = require("../controller/DoctorController");

Router.post("/login", wrapAsync(AuthController.login));
Router.post("/register", wrapAsync(AuthController.signin));
Router.get("/refreshtoken", wrapAsync(AuthController.refreshToken));
Router.post("/generateotp", wrapAsync(AuthController.generateOtp));

// Admin Login
Router.post("/adminlogin", wrapAsync(AuthController.adminLogin));

// Doctor Modules
Router.get("/doctors", wrapAsync(DoctorController.getAllDoctors));

// Token Refresh
Router.get("/refresh", wrapAsync(AuthController.refreshToken));

// user only Routes
Router.post(
  "/:userId/appointDoctor/:id",
  verifyAccessToken,
  wrapAsync(DoctorController.ReqDoctorAppointment),
);

// Admin Only Routes
Router.post(
  "/createdoctors",
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

module.exports = Router;
