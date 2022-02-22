const mysql = require("mysql");
const dotenv = require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});

var sql

const createShop = (data) => {
    sql = `INSERT INTO markety(nazev, mesto) VALUES ('${data.nazev}', '${data.mesto}')`;
    con.query(sql, (err, result) => {
        if (err) throw err
    })
}

const addSort = (data) => {
}

//createShop({nazev: 'xdd'})