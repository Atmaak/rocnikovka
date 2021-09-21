const mysql = require("mysql");
const dotenv = require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});


/*
module.exports = {
    register: function reg(username, password, res) {
      register(username, password, res);
    },
  };
*/

con.connect();// pripoji se k db

var sql

//addItem('fasga', 1, 6, 45)

displayNewestList(1)

//createList(1)

function createList(id_uzi, res) {
  sql = `INSERT INTO seznamy(id_uzi) VALUES ("${id_uzi}")`
  con.query(sql, function (err, result) {
      if(err) throw err;
      //res.send({"message": "List has been created."})
      console.log({"message": "List has been created."})
  })
}

function addItem(item, id_sta, id_sez, kusy) {
  
  sql = `INSERT INTO polozky (nazev) VALUES ("${item}")`

  con.query(sql, function (err, result) {
    if(err) throw err
  })

  con.query(`SELECT id_pol FROM polozky WHERE nazev = "${item}"`, function (err, result) {
    if(err) throw err
    sql = `INSERT INTO pol_sez(id_sez, id_pol, kusy, id_sta) VALUES (${id_sez}, ${result[result.length-1].id_pol}, ${kusy}, ${id_sta})`
    console.log(sql)
    
    con.query(sql, function (err, result) {
      if(err) throw err
    })

  })
}

function displayNewestList(id_uzi) {
  sql = `SELECT * FROM seznamy WHERE id_uzi = ${id_uzi}`

  con.query(sql, function (err, result) {
    //console.log(result)
    sortByDate(result)
    //console.log(result[result.length-1].id_sez)
   
  })
}


const sortByDate = arr => {
   const sorter = (a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
   }
   arr.sort(sorter);
};