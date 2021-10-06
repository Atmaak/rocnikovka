import Header from './components/Header'
import Login from './components/Login'
import {useState} from 'react'
import axios from 'axios'
//import passwordHash from 'password-hash'

const mysql = require('mysql')
const dotenv = require('dotenv').config()

function App() {
const [showLogin, setShowLogin] = useState(true)

const klik = (e) => {
  console.log(e)
}
const onSubmit = async (refUsername, refPassword) => {
  console.log(refUsername)
  console.log(refPassword)

  const res = await fetch('http://localhost:3001/log', {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: `{"username": "${refUsername}", "password": "${refPassword}"}`
  })

  console.log(res)
  
  //if(res) setShowLogin(false)

  
}

fetch("http://localhost:3001/log", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "{\"username\":\"admin\",\"password\":\"admin\"}"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});


  return (
    <>
      <Header title='Shoping List' btnName='Klik' onClick={klik}/>
      {showLogin && <Login onSubmit={onSubmit}/>}
    </>
  )
}

export default App;
