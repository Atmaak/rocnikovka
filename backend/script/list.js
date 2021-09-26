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
    }
  };


//con.connect();// pripoji se k db

var sql

//addItem('fasga', 1, 6, 45)

//console.log(displayNewestList('admin'))

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

async function displayNewestList(user, res) {
  //console.log(user)
  const id_uzi = await getUserId(user)
  
  //console.log(id_uzi)
  sql = `SELECT * FROM seznamy WHERE id_uzi = ${id_uzi[0].id_uzi}`

  res.send(await new Promise((resolve, reject) => {
    con.query(
     sql,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  }))
  /*con.query(sql, function (err, result) {
    console.log(result)
  })*/
}

function getUserId(user) {
  sql = `SELECT id_uzi FROM uzivatele WHERE jmeno = "${user}"`
  return new Promise((resolve, reject) => {
    con.query(
     sql,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
  
}
const sortByDate = arr => {
   const sorter = (a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
   }
   arr.sort(sorter);
};

/*
(async () => {
  con.connect();
  const result = await getColour("username", 2);
  console.log(result);
  con.end();
})();
*/