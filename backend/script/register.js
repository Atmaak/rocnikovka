const mysql = require("mysql");
const passwordHash = require("password-hash");
const dotenv = require("dotenv").config();
const randomstring = require('randomstring')

const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});

//register('kokot', 'kokot')

module.exports = {
  register: function reg(username, password, res) {
    register(username, password, res);
  },
};




//register('kokot', 'negr')
con.connect();// pripoji se k db
function register(username, password) {
    var hashedPassword;
    var uid = randomstring.generate({
      length: 32
    })
    con.query("SELECT username FROM users", function (err, result, fields) {
      // sellectne vsechny jmeno z db

      if (err) throw err; //pokud je error pri pripojovani k db tak hodi error

      for (let i = 0; i < result.length; i++) {
        if (username == result[i].username)
          return res.send({"message": "username not awalible choose another one"}); //kontroluje pokud jmeno neni v db
      }

      hashedPassword = passwordHash.generate(password); //zahashuje heslo

      var sql = `INSERT INTO users (uid, username, password) VALUES ("${uid}", "${username}","${hashedPassword}")`; //vlozi jmeno a heslo

      con.query(sql, function (err, result) {
        if (err) throw err; //pokud je error pri pripojovani k db tak hodi error
        res.send({"message": "Created an account"})
       
      });

      });
}