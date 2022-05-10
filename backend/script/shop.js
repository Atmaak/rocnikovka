const mysql = require("mysql");
const dotenv = require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});

var sql;

const createShop = (data) => {
  sql = `INSERT INTO markety(nazev, mesto) VALUES ('${data.nazev}', '${data.mesto}')`;
  con.query(sql, (err, result) => {
    if (err) throw err;
  });
};

const getShops = () => {
  sql = `SELECT * FROM markety`;
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

const getPosition = (data) => {
  sql = `SELECT * FROM serazeni group by id_mark DESC WHERE id_mark = ${data.id_mark}`;
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

module.exports = {
  getShops,
  createShop,
  getPosition
};
//createShop({nazev: 'xdd'})
