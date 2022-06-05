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
  //console.log(data)
  sql = `INSERT INTO markety(nazev, mesto) VALUES ('${data.nazev}', '${data.mesto}')`;
  con.query(sql, (err, result) => {
    if (err) throw err;
  });
  sql = `SELECT max(id_mark) as id_mark from markety`
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

};

const deleteShop = (data) => {
  sql = `DELETE FROM serazeni WHERE id_mark = ${data.id_mark}`
  con.query(sql, (err, result) => {
    if (err) throw err;
  });
  sql = `DELETE FROM markety WHERE id_mark = ${data.id_mark}`
  con.query(sql, (err, result) => {
    if (err) throw err;
  });
}

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
  sql = `SELECT * FROM serazeni WHERE id_mark = ${data.id_mark}`;
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};


const addToLayout = async (data) => {
  const id = (await createShop(data.shop))[0].id_mark
  sql = `DELETE FROM serazeni WHERE id_mark = ${id}`
  con.query(sql, (err, result) => {
    if (err) throw err;
  });
  for (let i = 0; i < (data.poradi).length; i++){
    sql = `INSERT INTO serazeni(id_mark, pozice, id_typ) VALUES (${id}, ${i}, ${data.poradi[i].id_szn})`;
    con.query(sql, (err, result) => {
      if (err) throw err;
    });
  }
}

module.exports = {
  getShops,
  deleteShop,
  getPosition,
  addToLayout
};
