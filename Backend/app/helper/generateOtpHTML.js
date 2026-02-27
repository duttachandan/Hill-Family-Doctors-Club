const html = (email, otp) => {
  return `<!DOCTYPE html>
                  <html>
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  </head>
                  <body style="margin:0; padding:0; background-color:#f2f5f9; font-family:Arial, Helvetica, sans-serif;">

                  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0; background:#f2f5f9;">
                    <tr>
                      <td align="center">

                        <!-- Main Card -->
                      <table width="600" cellpadding="0" cellspacing="0"
                        style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.08);">

                        <!-- Header -->
                        <tr>
                          <td align="center" style="background:#1e40af; padding:30px;">
                            <h1 style="color:#ffffff; margin:0; font-size:24px; letter-spacing:1px;">
                              DoctorsClub
                            </h1>
                          </td>
                        </tr>

                        <!-- Content -->
                        <tr>
                          <td style="padding:40px 30px; color:#333333;">

                            <h2 style="margin-top:0; font-size:20px;">
                              Welcome, ${email?.split("@")[0]}
                            </h2>

                            <p style="font-size:15px; line-height:1.6; color:#555;">
                              Use the following One Time Password (OTP) to complete your verification process.
                              This code will expire in <strong>60 seconds</strong>.
                            </p>

                            <!-- OTP Box -->
                            <div style="text-align:center; margin:30px 0;">
                              <span style="
                                display:inline-block;
                                padding:18px 30px;
                                font-size:26px;
                                font-weight:700;
                                letter-spacing:5px;
                                background:#f3f4f6;
                                border-radius:8px;
                                color:#111827;">
                                ${otp}
                              </span>
                            </div>

                            <p style="font-size:13px; color:#777;">
                              Do not share this OTP with anyone. DoctorsClub will never ask for your password or OTP.
                            </p>

                          </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                          <td align="center" style="background:#f9fafb; padding:20px; font-size:12px; color:#888;">
                            © ${new Date().getFullYear()} DoctorsClub Group<br/>
                            If you did not request this email, you can safely ignore it.
                          </td>
                        </tr>

                      </table>

                      </td>
                    </tr>
                  </table>
              </body>
            </html>`;
};

const welcomeHtml = (username) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f9; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9; padding:40px 0;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td align="center" style="background:#1e3a8a; padding:30px;">
              <h1 style="color:#ffffff; margin:0; font-size:24px; letter-spacing:1px;">
                Welcome to DoctorsClub
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 30px; color:#333333;">

              <h2 style="margin-top:0; font-size:20px;">
                Hello ${username},
              </h2>

              <p style="font-size:15px; line-height:1.6; color:#555;">
                We’re excited to have you onboard! Thank you for choosing DoctorsClub.
                Your account has been successfully created.
              </p>

              <p style="font-size:15px; line-height:1.6; color:#555;">
                You can now explore our platform, connect with professionals,
                and access exclusive resources designed for you.
              </p>

              <!-- CTA Button -->
              <div style="text-align:center; margin:30px 0;">
                <a href="https://yourwebsite.com"
                  style="background:#2563eb; color:#ffffff; padding:12px 28px;
                  text-decoration:none; border-radius:6px; font-size:14px;
                  display:inline-block; font-weight:bold;">
                  Go to Dashboard
                </a>
              </div>

              <p style="font-size:13px; color:#777;">
                If you have any questions, feel free to contact our support team.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background:#f9fafb; padding:20px; font-size:12px; color:#888;">
              © ${new Date().getFullYear()} DoctorsClub Group<br/>
              All rights reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};

module.exports = { html, welcomeHtml };
