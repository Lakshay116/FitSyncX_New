const { text } = require('body-parser');
const nodemailer = require('nodemailer');
const { errorMonitor } = require('nodemailer/lib/xoauth2');
require('dotenv').config();




const sendMail = async (email, mailSubject, content) => {
    try {
        var transport = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "lakshay.jangra.394@gmail.com",
                pass: 'cfaprmptfpvzdffd'
            }
        });

        const mailOptions = {
            from: "lakshay.jangra.394@gmail.com",
            to: email,
            subject: mailSubject,
            html: content
        }
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("mail Sent Succesfully", info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = sendMail;

