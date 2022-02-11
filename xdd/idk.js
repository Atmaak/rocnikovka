const fetch = require("node-fetch");


const checkIfAdmin = async (id_uzi) => {
  const res = await fetch('http://localhost:3001/user/isAdmin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      id_uzi: 1
  })
  })
  console.log(await res.json())

  
}

checkIfAdmin(1)