const express = require("express");
const AuthController = require("../controller/AuthController");
const wrapAsync = require("../utils/WrapAsync");

const Router = express.Router();

Router.post("/login", wrapAsync(AuthController.login));
Router.post("/signin", wrapAsync(AuthController.signin));
Router.get("/refreshtoken", wrapAsync(AuthController.refreshToken));

module.exports = Router;
