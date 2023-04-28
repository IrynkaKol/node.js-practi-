const sgMail = require('@sendgrid/mail');
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "kolomoyka@meta.ua",
    from: "kolomoyka@gmail.com",
    subject: "test",
    html: "<p>C Сайта пришла новая заявка</p>"
}
sgMail.send(email)
.then (() => {console.log("Email send success")})
.catch(error => console.log(error.message))