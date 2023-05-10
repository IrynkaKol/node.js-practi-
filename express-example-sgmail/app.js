require("dotenv").config();
const sgMail = require('@sendgrid/mail');


const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "ticamis978@pixiil.com",
    from: "kolomoyka@meta.ua",
    subject: "test",
    text: "Hello word",
    html: "<p>C cайта пришла новая заявка</p>"
}
sgMail.send(email)
.then ((res) => {console.log(res)})
// .then (() => {console.log("Email send success")})
.catch(error => console.log(error.message))