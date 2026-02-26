const express = require("express");
const Router = express.Router();
const { verifyAdminToken } = require("../utils/token");

const AuthController = require("../controller/AuthController");
const wrapAsync = require("../utils/WrapAsync");
const DoctorController = require("../controller/DoctorController");

Router.post("/login", wrapAsync(AuthController.login));
Router.post("/register", wrapAsync(AuthController.signin));
Router.get("/refreshtoken", wrapAsync(AuthController.refreshToken));

// Admin Login
Router.post("/adminlogin", wrapAsync(AuthController.adminLogin));

// Doctor Modules
Router.get("/doctors", wrapAsync(DoctorController.getAllDoctors));

// Token Refresh
Router.get("/refresh", wrapAsync(AuthController.refreshToken));

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
