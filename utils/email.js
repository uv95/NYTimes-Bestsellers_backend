const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //1) create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  //2) define email options
  const mailOptions = {
    from: `New York Times Bestsellers <${process.env.EMAIL_FROM}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3) send email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
