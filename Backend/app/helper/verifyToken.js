require("dotenv").config();
const ExpressError = require("../utils/ExpressError");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = res.header["Authorization"];
  if (!token)
    throw new ExpressError(404, "Token is required to enter into this path");
  const verifyToken = await jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET_KEY,
  );
  if (!verifyToken) throw new ExpressError(404, "Token Expired");
  req.user = verifyToken;
  next();
};

module.exports = verifyToken;
