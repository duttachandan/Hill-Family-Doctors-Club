require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const ExpressError = require("../utils/ExpressError");
const userSchema = require("../model/userSchema");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const { UserSchemaValidator } = require("../utils/JoiValidation");
const sendMail = require("../utils/sendMail");
const generateOtp = require("../helper/generateOtp");
const otpModel = require("../model/otpSchema");

class AuthController {
  async generateOtp(req, res) {
    const { email, password, role } = req.body;
    if (!email) throw ExpressError(404, "no Email Found");
    const otp = generateOtp();
    const hashPass = await bcrypt.hash(password, 10);
    const hashOtp = await bcrypt.hash(`${otp}`, 10);

    const saveOtp = await otpModel.findOneAndUpdate(
      { email }, // filter
      {
        email,
        password: hashPass,
        role: role || "users",
        otp: hashOtp,
        createdAt: new Date(), // 🔥 reset TTL timer
      },
      {
        upsert: true, // create if not exists
        new: true, // return updated document
        setDefaultsOnInsert: true,
      },
    );

    if (!saveOtp) throw ExpressError(404, "OTP not generated");

    sendMail(
      process.env.EMAIL_KEY,
      email,
      "Verify OTP to register in Doctors Club",
      `
    <h1>Welcome to DoctorsClub, ${email?.split("@")[0]}. </h1>
    <p>Your One Time Password: <span style="font-size:30px; font-weight:700;">${otp}</span></p>
    <div>from DcoctorsClub Group</div>
      `,
    );

    res.json({
      success: true,
    });
  }

  async signin(req, res) {
    const { email, userOtp } = req.body;
    console.log(email, typeof userOtp);
    const username = email?.split("@")[0];

    // find the user is already exist or not
    const userExist = await userSchema.findOne({ email });
    if (userExist)
      throw new ExpressError(
        401,
        "you have already registered on this email id",
      );

    //findUserOTP
    const otpRecord = await otpModel.findOne({ email });
    if (!otpRecord) throw new ExpressError(404, "OTP expired or Invalid");
    const { role, password, otp } = otpRecord;
    const verifyOtp = await bcrypt.compare(userOtp, otp);
    if (!verifyOtp) throw new ExpressError(404, "OTP Incorrect");

    const payload = {
      username: username,
      email: email,
      password: password,
      role: role || "users",
    };

    const { error } = await UserSchemaValidator.validate(payload);
    if (error) throw new ExpressError(404, error.message);

    const userData = userSchema(payload);

    const saveData = await userData.save();

    if (!saveData)
      throw new ExpressError(
        404,
        "some problem occured while submitting in the database",
      );

    // token generation
    const accessToken = await generateAccessToken(email, username);
    const refreshToken = await generateRefreshToken(email, username);
    if (!accessToken || !refreshToken)
      throw ExpressError(404, "we are facing issue generating token");

    sendMail(
      process.env.EMAIL_KEY,
      email,
      "Welcome To DoctorsClub",
      `
      <h1>Welcome to DoctorsClub, ${username}. </h1>
      <p>Thank you for choosing us</p>
      <div>from DcoctorsClub Group</div>
      `,
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.json({
      email: saveData.email,
      useranme: saveData.username,
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

    const refreshToken = await generateRefreshToken(
      userDetails.email,
      userDetails.username,
    );

    const accessToken = await generateAccessToken(
      userDetails.email,
      userDetails.username,
    );

    if (!accessToken || !refreshToken)
      throw ExpressError(404, "no token generated");

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    sendMail(
      process.env.EMAIL_KEY,
      userDetails.email,
      "Welcome To DoctorsClub",
      "<h1>Welcome to the DoctorsClub</h1>",
    );

    res.json({
      success: true,
      accessToken,
    });
  }

  async adminLogin(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ExpressError(404, "Enter all the field Properly");
    const findUser = await userSchema.findOne({ email });
    if (!findUser || findUser.role !== "admin")
      throw new ExpressError(
        404,
        "You are not authorized Login with correct credentials",
      );

    const { username } = findUser;
    // Token Generation based on this
    const accessToken = await generateAccessToken(email, username);
    const refreshToken = await generateRefreshToken(email, username);

    if (!refreshToken || !accessToken)
      throw new ExpressError(404, "no token found");
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.json({
      findUser,
      accessToken,
    });
  }

  async refreshToken(req, res) {
    const token = req.cookies.refreshToken;
    if (!token) throw new ExpressError(404, "no token found");
    const decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY);
    const newAccessToken = await generateAccessToken(
      decode.email,
      decode.username,
    );
    if (!newAccessToken)
      throw new ExpressError(404, "new acess token generation issue");
    res.json({
      accessToken: newAccessToken,
    });
  }
}

module.exports = new AuthController();
