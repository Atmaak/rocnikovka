const mysql = require("mysql");
const passwordHash = require("password-hash");
const dotenv = require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});

module.exports = {
  login: function log(username, password, res) {
    login(username, password, res);
  },
};
con.connect()
function login(username, password, res) {
    con.query("SELECT * FROM uzivatele", function (err, result, fields) {
      // sellectne vsechny jmeno z db

      if (err) throw err; //pokud je error pri pripojovani k db tak hodi error
      for (let i = 0; i < result.length; i++) {
        if (username == result[i].jmeno && passwordHash.verify(password, result[i].heslo)) {
           return res.send({login: true,  username: `${username}`}); // kontrolujje pokud je spravne heslo i jmeno
           
        }
      }
      res.send({login: false})
    });
}
