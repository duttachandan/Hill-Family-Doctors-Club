const generateOtp = () => {
  const otp = Math.floor(1000 + Math.random() * 10000);
  return otp;
};

module.exports = generateOtp;
