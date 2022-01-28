const mysql = require("mysql");
const dotenv = require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});





const deleteItem = (id_pol) => {
    sql = `DELETE FROM polozky WHERE polozky.id_pol = ${id_pol};`
    
    con.query(sql, function (err, result) {
        if (err) throw err;
    })

    sql = `DELETE FROM pol_sez WHERE pol_sez.id_pol = ${id_pol};`
    con.query(sql, function (err, result) {
      if (err) throw err;
  })
}

const changeState = (id_sta, id_pol) => {
  sql = `UPDATE pol_sez SET id_sta='${id_sta}' WHERE id_pol = ${id_pol}`
  con.query(sql, (err, result) => {
    if (err) throw err
  })
}

const changeItem = (id_pol, nazev, kusy) => {
  sql = `UPDATE pol_sez SET kusy=${kusy} where id_pol = ${id_pol}`
  con.query(sql, (err, result) => {
    if (err) throw err
  })
  sql = `UPDATE polozky SET nazev='${nazev}' where id_pol = ${id_pol}`
  con.query(sql, (err, result) => {
    if (err) throw err
  })
}

const getAllTypes = () => {
  sql = `SELECT * FROM serazeni`
  const res = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) return reject(err)
      return resolve(result)
    })
  })
  return res
}


const getHowManyTypes = () => {
  sql = `SELECT id_szn FROM serazeni ORDER BY id_szn DESC LIMIT 0, 1`
  const res = new Promise((resolve, reject) => {
    con.query(sql, (err, result)=> {
      if(err) return reject(err)
      return resolve(result)
    })
  })
  return res
}

module.exports = { 
  deleteItem: deleteItem,
  changeState: changeState,
  changeItem: changeItem,
  getAllTypes: getAllTypes,
  getHowManyTypes: getHowManyTypes,
}