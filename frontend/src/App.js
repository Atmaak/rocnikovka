import Header from './components/Header'
import Login from './components/Login'
import MainPage from './components/MainPage'
import Register from './components/Register'
import './index.css'

import {useState} from 'react'
//import passwordHash from 'password-hash'

//const mysql = require('mysql')
//const dotenv = require('dotenv').config()

function App() {
const [showLogin, setShowLogin] = useState(true)
const [showMainPage, setShowMainPage] = useState(false)
const [showRegister, setShowRegister] = useState(false)
const [id, setId] = useState(0)

const onSubmit = async (refUsername, refPassword) => {
  //console.log(refUsername)
  //console.log(refPassword)

  var res = await fetch('http://localhost:3001/user/log', {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: `{"username": "${refUsername}", "password": "${refPassword}"}`
  })
  res = await res.json()
  if(res.id){
    setId(res.id)
    setShowMainPage(true)
    setShowLogin(false)
  }
}
const onClickShowRegister = () => {
  setShowRegister(true)
  setShowLogin(false)
}

const registered = () => {
  setShowLogin(true)
  setShowRegister(false)
}


  return (
    <>
      <Header title='Shoping List' id_uzi={id} />
      {showLogin && <Login onSubmit={onSubmit} onClickShowRegister={onClickShowRegister}/>}
      {showMainPage && <MainPage id={id}/>}
      {showLogin && <button onClick={() => {onSubmit('admin', 'admin')}}>Log it</button> /* pouze pro testovani*/}
      {showRegister && <Register registered={registered}/>}
    </>
  )
}

export default App;
