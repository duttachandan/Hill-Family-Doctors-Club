const express = require("express");
const Router = express.Router();

const AuthController = require("../controller/AuthController");
const wrapAsync = require("../utils/WrapAsync");
const DoctorController = require("../controller/DoctorController");

Router.post("/login", wrapAsync(AuthController.login));
Router.post("/register", wrapAsync(AuthController.signin));
Router.get("/refreshtoken", wrapAsync(AuthController.refreshToken));

// Doctor Modules
Router.get("/doctors", wrapAsync(DoctorController.getAllDoctors));

// Admin Only Routes
Router.post("/createdoctors", wrapAsync(DoctorController.createDoctor));

module.exports = Router;
