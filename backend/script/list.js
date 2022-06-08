const mysql = require("mysql");
const dotenv = require("dotenv").config();

const user = require('./user')
const con = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: "",
  database: process.env.db_name,
});

var sql

//vytvori list

async function createList(list) {
  let User = await user.getData({id_uzi: list.id_uzi})
  sql = `INSERT INTO seznamy(id_uzi, nazev,id_fam, typ) VALUES (${list.id_uzi}, "${list.nazev}",${User.id_fam}, "${list.type}")`
  con.query(sql, function (err, result) {
      if(err) throw err;
  })
}

//vlozi do databaze item

//addItem('xdPEPEGA', 2, 13, 69)

function addItem(item) {
  sql = `INSERT INTO polozky (nazev, id_szn) VALUES ("${item.item}", ${item.id_szn})`
  con.query(sql, function (err, result) {
    if(err) throw err
  })
  con.query(`SELECT id_pol FROM polozky WHERE nazev = "${item.item}"`, (err, result) => {
    if(err) throw err
    sql = `INSERT INTO pol_sez(id_sez, id_pol, kusy, id_sta) VALUES (${item.id_sez}, ${result[result.length-1].id_pol}, ${item.kusy}, ${item.id_sta} )`
    
    con.query(sql, function (err, result) {
      if(err) throw err
    })
  })
}

//selectne vsechny seznamy od 1 uzivatele podle id_uzi

async function displayNewestList(id_uzi, res) {
  let User = await user.getData({id_uzi: id_uzi})
  sql = `SELECT seznamy.id_sez, seznamy.nazev, seznamy.datum, seznamy.id_uzi, seznamy.id_fam, uzivatele.jmeno, seznamy.cena, seznamy.typ FROM seznamy JOIN uzivatele on seznamy.id_uzi = uzivatele.id_uzi WHERE (seznamy.id_uzi = ${id_uzi}) OR ((seznamy.id_fam = ${User.id_fam}) AND (seznamy.id_fam > 0));`
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
const getList = async (data) => {
  console.log(data);
  sql = `SELECT * FROM serazniseznamu WHERE id_sez = ${data.id_sez}` 
  const id = await getNazevMarketu(data.mark)
  
  sql = `SELECT * FROM serazniseznamu WHERE id_sez = ${data.id_sez}` 
  if(id != null) {
    console.log(id);
    sql = `SELECT * FROM serazniseznamu WHERE id_sez = ${data.id_sez} AND id_mark = ${id}`  
  }
  
  return await new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) reject(err)
      return resolve(result)
      
    })
  })
}

const getNazevMarketu = (mark) => {
  sql = `SELECT * FROM markety where nazev = '${mark}'`
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) reject(err)
      ////console.log(mark)
      ////console.log(result)
      return resolve(result['id_mark'])
      
    })
  })
}

const deleteList = (data) =>{
  sql = `DELETE FROM pol_sez WHERE pol_sez.id_sez = ${data.id_sez};`
  con.query(sql, (err, result) => {
     if(err) throw err
  })

  sql = `DELETE FROM seznamy WHERE id_sez = ${data.id_sez};`
  con.query(sql, (err, result) => {
    if(err) throw err;
  })

  
}


const setPrice = (data) => {
  sql = `UPDATE seznamy SET cena = ${data.price} WHERE id_sez = ${data.id_sez};`
  con.query(sql, (err, result) => {
    if(err) throw err
  })
}

const addType = (data) => {
  sql = `UPDATE seznamy SET typ='${data.type}' WHERE ${data.id_sez}`
  con.query(sql, (err, result) => {
    if(err) throw err
  })
}

const getCompletedLists = (data) => {
  ////console.log(data.id_uzi.id_uzi)
  sql = `SELECT * FROM seznamy WHERE cena > 0 AND id_uzi = ${data.id_uzi.id_uzi}`
  ////console.log(sql)
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) reject(err)
      return resolve(result)
      
    })
  })
}

module.exports = {
  displayNewestList,
  getList,
  addItem,
  createList,
  deleteList,
  setPrice,
  addType,
  getCompletedLists
};