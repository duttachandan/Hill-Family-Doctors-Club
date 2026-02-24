require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ExpressError = require("../utils/ExpressError");
const userSchema = require("../model/userSchema");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");

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

    //password generation
    const hashPass = await bcrypt.hash(password, 10);

    // token generation
    const accessToken = generateAccessToken(email, username);
    const refreshToken = generateRefreshToken(email, username);

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
      refreshToken,
      accessToken,
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

    const refreshToken = generateRefreshToken(
      userDetails.email,
      userDetails.username,
    );

    const accessToken = generateAccessToken(
      userDetails.email,
      userDetails.username,
    );

    res.json({
      success: true,
      refreshToken,
      accessToken,
    });
  }

  async adminLogin(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password)
      throw new ExpressError(404, "Enter all the field Properly");
    const findUser = await userSchema.findOne({ email });
    console.log(findUser);
    if (!findUser || findUser.role !== "Admin")
      throw new ExpressError(
        404,
        "You are not authorized Login with correct credentials",
      );

    // Token Generation based on this
    res.json(findUser);
  }

  async adminCreation(req, res) {}

  async refreshToken(req, res) {}
}

module.exports = new AuthController();
