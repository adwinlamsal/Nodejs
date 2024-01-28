"use strict";
const nodemailer = require("nodemailer");

const dotenv = require('dotenv').config()


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

async function sendMailGmail({from,to,subject,text}) {

  const info = await transporter.sendMail({
    from: subject, from, 
    to: to, 
    subject: subject, 
    text: text, 
    attachments :[{
      filename:'cafe.png',
      path: '/Users/bhankumari/Desktop/cafe.png'

    }],
  });
}



module.exports={sendMailGmail};


