const transporter = require("../helper/nodeMailer");

const sendMail = async (from, to, subject, html) => {
  await transporter.sendMail({
    from: from,
    to: to,
    subject: subject || "Hello World",
    html: html || "Hello Pooled World",
  });
};

module.exports = sendMail;
