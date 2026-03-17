require("dotenv").config();
const jwt = require("jsonwebtoken");
const ExpressError = require("./ExpressError");
const userSchema = require("../model/userSchema");

const generateAccessToken = async (email, username) => {
  const payload = {
    email: email,
    username: username,
  };
  const accessToken = await jwt.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );

  return accessToken;
};

const generateRefreshToken = async (email, username) => {
  const payload = {
    email: email,
    username: username,
  };
  const refreshToken = await jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
  return refreshToken;
};

const verifyAccessToken = async (req, res, next) => {
  const token = req.body?.token || req.headers?.authorization;
  if (!token) throw new ExpressError(404, "no token found");
  const decode = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
  req.user = decode;
  next();
};

const verifyAdminToken = async (req, res, next) => {
  try {
    const token = req.body?.token || req.headers?.authorization;
    if (!token) throw new ExpressError(401, "no token found");
    const response = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET_KEY,
    );
    if (!response) {
      throw new ExpressError(410, response.message || "jwt Expires")
    }
    const { email } = response;
    if (!email) throw new ExpressError(404, "jwt Expired");
    const userData = await userSchema.findOne({ email });
    const { role } = userData;
    if (role !== "admin")
      throw new ExpressError(404, "You are not authorized to edit this file");
  } catch (err) {
    throw new ExpressError(404, err.message);
  }
  next();
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyAdminToken,
};
