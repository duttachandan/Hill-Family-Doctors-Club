require("dotenv").config();
const jwt = require("jsonwebtoken");
const ExpressError = require("./ExpressError");

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
  const refreshToken = await jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: process.env.REFRESH_TOKEN_SECRET_KEY,
  });
  return refreshToken;
};

const verfiyAccessToken = async (req, res, next) => {
  const token = req.body?.token || req.headers?.authorization;
  if (!token) throw new ExpressError(404, "no token found");
  const decode = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
  console.log(decode);
  req.user = decode;
  next();
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verfiyAccessToken,
};
