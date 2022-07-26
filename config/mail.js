const nodemailer = require('nodemailer');

const {
  MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS,
} = process.env;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  // secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

module.exports = transporter;
