const nodemailer = require('nodemailer');
require('dotenv').config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: "465 ",
    secure: true,
    auth: {
user: "kolomoyka@meta.ua",
pass: META_PASSWORD,
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "kolomoyka@gmail.com",
    from: "kolomoyka@meta.ua",
    subject: "test",
    html: "<p>C Сайта пришла новая заявка</p>"
}

transporter
  .sendMail(email)
  .then(() => console.log("Email send seccess"))
  .catch(error => console.log(error.message));