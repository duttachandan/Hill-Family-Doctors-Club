require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ExpressError = require("../utils/ExpressError");
const userSchema = require("../model/userSchema");

class AuthController {
  async signin(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ExpressError(404, "enter all the field correctly");
    const username = email.split("@")[0];

    // find the user is already exist or not
    const userDetails = await userSchema.findOne({ email });
    if (userDetails)
      throw new ExpressError(
        401,
        "you have already registered on this email id",
      );

    // token generation
    const payload = {
      email: email,
      username: username,
    };
    const token = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
    if (!token) throw new ExpressError(404, "token generation failed");

    //password generation
    const hashPass = await bcrypt.hash(password, 10);

    const userData = userSchema({
      username: username,
      email: email,
      password: hashPass,
      role: "users",
    });

    const saveData = await userData.save();

    if (!saveData)
      throw new ExpressError(
        404,
        "some problem occured while submitting in the database",
      );

    res.json({
      email: saveData.email,
      useranme: saveData.username,
      token,
    });
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ExpressError(404, "Enter email and password correctly");
    // Check if the users is actually exist or not
    const userDetails = await userSchema.findOne({ email });
    if (!userDetails)
      throw new ExpressError(404, "you need to register yourself first");
    const userPass = userDetails.password;

    // verify password by bcyrpt
    const decode = await bcrypt.compare(password, userPass);
    if (!decode) throw new ExpressError(401, "Enter the correct Password");

    const payload = {
      email: userDetails.email,
      username: userDetails.username,
    };

    const token = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });

    res.json({
      success: true,
      token,
    });
  }

  async refreshToken(req, res) {}
}

module.exports = new AuthController();
