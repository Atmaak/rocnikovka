import Header from './components/Header'
import Login from './components/Login'
import MainPage from './components/MainPage'
import './index.css'

import {useState} from 'react'
//import passwordHash from 'password-hash'

//const mysql = require('mysql')
//const dotenv = require('dotenv').config()

function App() {
const [showLogin, setShowLogin] = useState(true)
const [showMainPage, setShowMainPage] = useState(false)
const [id, setId] = useState(0)

const onSubmit = async (refUsername, refPassword) => {
  //console.log(refUsername)
  //console.log(refPassword)

  var res = await fetch('http://localhost:3001/log', {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: `{"username": "${refUsername}", "password": "${refPassword}"}`
  })
  res = await res.json()
  
  //console.log(res)
  if(res.id){
    setId(res.id)
    setShowMainPage(true)
    setShowLogin(false)
   // console.log(id)
  }
}


  return (
    <>
      <Header title='Shoping List' />
      {showLogin && <Login onSubmit={onSubmit}/>}
      {showMainPage && <MainPage id={id}/>}
      {showLogin && <button onClick={() => {onSubmit('admin', 'admin')}}>Log it</button> /* pouze pro testovani*/}
    </>
  )
}

export default App;
