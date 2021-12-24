const mysql = require("mysql");
const dotenv = require("dotenv").config();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'Martin',
  password: "Pejsanek123",
  database: 'rocnikovka',
});

module.exports = { 
  deleteItem: function DeleteItem(id_pol){
    deleteItem(id_pol)
  },changeState: function ChangeState(id_sta, id_pol){
    changeState(id_sta, id_pol)
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

const changeState = (id_sta, id_pol) => {
  sql = `UPDATE pol_sez SET id_sta='${id_sta}' WHERE id_pol = ${id_pol}`
  con.query(sql, (err, result) => {
    if (err) throw err
  })
}