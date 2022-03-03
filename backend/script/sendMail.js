const nodemailer = require('nodemailer')
const passwordHash = require("password-hash");
const user = require('./user');
require('dotenv').config()
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.email_pass,
    },
})

const sendPasswordMail = async (email) => {
    const newPassword = randomPass()
    const data = await user.getDataFromMail(email)
    if(!data) return 
    
    const mailOptions = {
        from: 'Shoping List',
        to: 'kubjak21@gmail.com',
        subject: 'Forgot Password',
        text: `Your username is: ${data.jmeno} and your new password is: ${newPassword}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) throw err
    })

    user.changePassword(data.id_uzi, newPassword)
}

const randomPass = () => {
    return (Math.random() + 1).toString(36).substring(7)+(Math.random() + 1).toString(36).substring(7)+(Math.random() + 1).toString(36).substring(7);
}

module.exports = {
    sendPasswordMail
}