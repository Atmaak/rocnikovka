const  mysql = require('mysql');

const dotenv = require('dotenv').config()

const con = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: "",

  });


module.exports = {

}

function login(username, pass){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });



}