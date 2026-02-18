require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ExpressError = require("../utils/ExpressError");
const userModel = require("../model/userSchema");
const SECRET_KEY = process.env.SECRET_KEY;

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ExpressError(404, "enter all the field correctly");
    const username = email.split("@")[0];
    console.log(username);
    const payload = {
      email: email,
      username: username,
    };
    const token = await jwt.sign(payload, SECRET_KEY);
    if (!token) throw new ExpressError(404, "token generation failed");
    console.log(token);
    res.json({
      token,
    });
  }
  async signin(req, res) {}
  async refreshToken(req, res) {}
}

module.exports = new AuthController();
