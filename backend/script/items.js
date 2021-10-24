const { response } = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});

module.exports = { 
  deleteItem: function DeleteItem(id_pol){
    deleteItem(id_pol)
  }
}



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

