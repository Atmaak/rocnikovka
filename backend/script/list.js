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
    register: function reg(username, password, res) {
      register(username, password, res);
    },
    displayNewestList: function dis(user, res) {
      displayNewestList(user, res)
    },
    getList: function geTList (id_sez, response) {
      getList(id_sez, response)
    },
    addItem: function AddItem(item, id_sta, id_sez, kusy){
      addItem(item, id_sta, id_sez, kusy)
    },
    createList: function CreateList(id_uzi){
      createList(id_uzi)
    },
    deleteList: function DeleteList(id_sez){
      deleteList(id_sez)
    }
  };

var sql

//vytvori list

function createList(id_uzi) {
  sql = `INSERT INTO seznamy(id_uzi) VALUES ("${id_uzi}")`
  con.query(sql, function (err, result) {
      if(err) throw err;
  })
}

//vlozi do databaze item

//addItem('xdPEPEGA', 2, 13, 69)

function addItem(item, id_sta, id_sez, kusy) {

  sql = `INSERT INTO polozky (nazev) VALUES ("${item}")`

  con.query(sql, function (err, result) {
    if(err) throw err
  })
  con.query(`SELECT id_pol FROM polozky WHERE nazev = "${item}"`, function (err, result) {
    if(err) throw err
    sql = `INSERT INTO pol_sez(id_sez, id_pol, kusy, id_sta) VALUES (${id_sez}, ${result[result.length-1].id_pol}, ${kusy}, ${id_sta})`
    
    con.query(sql, function (err, result) {
      if(err) throw err
    })

  })
}

//selectne vsechny seznamy od 1 uzivatele podle id_uzi

async function displayNewestList(id_uzi, res) {
  //console.log(id_uzi)
  sql = `SELECT * FROM seznamy WHERE id_uzi = ${id_uzi}`

  res.send(await new Promise((resolve, reject) => {
    con.query(
     sql,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  }))
}


//selectne vsechno z view items
const getList = async (id_sez, res) => {
  sql = `SELECT * FROM items WHERE id_sez = ${id_sez}`
  const response = con.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
}

const deleteList = (id_sez) =>{
  sql = `DELETE FROM pol_sez WHERE pol_sez.id_sez = ${id_sez};`
  con.query(sql, (err, result) => {
     if(err) throw err
  })

  sql = `DELETE FROM seznamy WHERE id_sez = ${id_sez};`
  con.query(sql, (err, result) => {
    if(err) throw err;
  })

  
}