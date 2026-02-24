const express = require("express");
const Router = express.Router();
const { verfiyAccessToken } = require("../utils/token");

const AuthController = require("../controller/AuthController");
const wrapAsync = require("../utils/WrapAsync");
const DoctorController = require("../controller/DoctorController");

Router.post("/login", wrapAsync(AuthController.login));
Router.post("/register", wrapAsync(AuthController.signin));
Router.get("/refreshtoken", wrapAsync(AuthController.refreshToken));

// Admin Login
Router.get("/adminlogin", wrapAsync(AuthController.adminLogin));

// Doctor Modules
Router.get("/doctors", wrapAsync(DoctorController.getAllDoctors));

// Admin Only Routes
Router.post(
  "/createdoctors",
  verfiyAccessToken,
  wrapAsync(DoctorController.createDoctor),
);
Router.get(
  "/deletedoctor/:id",
  verfiyAccessToken,
  wrapAsync(DoctorController.DeleteDoctor),
);

module.exports = Router;
