const mysql = require("mysql");
const dotenv = require("dotenv").config();
const passwordHash = require("password-hash");

const list = require("./list")
const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});

con.connect();
var sql;
const getData = async (id_uzi, res) => {
  sql = `SELECT jmeno, email, opravneni.name as "opravneni" FROM uzivatele JOIN opravneni on uzivatele.id_opr = opravneni.id_opr WHERE id_uzi = ${id_uzi};`;
  res.send(
    await new Promise((resolve, reject) => {
      con.query(sql, (err, result) => {
        return err ? reject(err) : resolve(result[0]);
      });
    })
  );
};

const changeUsername = (id_uzi, username) => {
  sql = `UPDATE uzivatele SET jmeno="${username}" WHERE id_uzi = ${id_uzi}`
  con.query(sql, (err, result) => {
    if(err) throw err
  })
}

const changeEmail = (id_uzi, email) => {
  sql = `UPDATE uzivatele SET email="${email}" WHERE id_uzi = ${id_uzi}`
  con.query(sql, (err, result) => {
    if(err) throw err
  })
}

const changePassword = (id_uzi, password) => {
  const hashedPassword = passwordHash.generate(password)
  sql = `UPDATE uzivatele SET heslo='${hashedPassword}' WHERE id_uzi = ${id_uzi}`
  con.query(sql, (err, result) => {
    if(err) throw err
  })
}

const deleteAccount = async (id_uzi) => {
  sql = `SELECT * FROM seznamy WHERE id_uzi = ${id_uzi};`
  const seznamy = await new Promise((resolve, reject) => {
    con.query(
     sql,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  })

  seznamy.map((seznam)=> {
    list.deleteList(seznam.id_sez)
  })

  sql = `DELETE FROM uzivatele WHERE id_uzi = ${id_uzi};`

  con.query(sql,(err, result) => {
    if(err) throw err
  })
}

const getDataFromMail = async (email) => {
  sql = `SELECT id_uzi, jmeno FROM uzivatele WHERE email = '${email}';`;
    return await new Promise((resolve, reject) => {
      con.query(sql, (err, result) => {
        if(err) return reject(err)
        return resolve(result[0])
      });
    })
  
}

module.exports = {
  getData,
  changeUsername,
  changeEmail,
  changePassword,
  deleteAccount,
  getDataFromMail
}
