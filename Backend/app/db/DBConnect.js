require("dotenv").config();
const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOD}`);
    console.log("Connection established");
  } catch (err) {
    console.log(err);
  }
};

module.exports = DBConnect;
