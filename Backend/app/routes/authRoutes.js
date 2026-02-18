const express = require("express");
const AuthController = require("../controller/AuthController");

const Router = express.Router();

Router.post("/login", AuthController.login);
Router.post("/signin", AuthController.signin);
Router.get("/refreshtoken", AuthController.refreshToken);

module.exports = Router;
