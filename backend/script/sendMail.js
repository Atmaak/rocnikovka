const nodemailer = require('nodemailer')
const passwordHash = require("password-hash");
const user = require('./user');
const mysql = require("mysql");

require('dotenv').config()
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.email_pass,
    },
})
const con = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: "",
    database: process.env.db_name,
  });
  
  var sql
  

const sendPasswordMail = async (email) => {
    const newPassword = randomPass()
    const data = await user.getDataFromMail(email)
    if(!data) return 
    
    const mailOptions = {
        from: 'Shoping List',
        to: `${email}`,
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

const sendDaList = async  (data) => {
    sql = `SELECT * FROM itemydomailu WHERE id_sez = ${data.id_sez}`
    
    var text = ''
    const result = await new Promise((resolve, reject) => {
            con.query(
             sql, 
              (err, result) => {
                return err ? reject(err) : resolve(result);
              }
            );
          })
      


     result.map((item) => {
        text += item.nazev + " : " + item.kusy + " \n" //"<br>"
    })
    
    text = "Your items are: \n" + text

    const mailOptions = {
        from: 'Shoping List',
        to: `${data.email}`,
        subject: 'Forgot Password',
        text
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) throw err
    })
}
 let xd = {
     id_sez: 103,
     email: "kubjak21@gmail.com"
 }
//sendDaList(xd)
module.exports = {
    sendPasswordMail,
    sendDaList
}