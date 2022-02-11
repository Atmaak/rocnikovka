import Header from './components/Header'
import Login from './components/mainpage/Login'
import MainPage from './components/MainPage'
import Register from './components/mainpage/Register'
import HeaderMainPage from './components/mainpage/HeaderMainPage'
import './index.css'

import {useState} from 'react'
//import passwordHash from 'password-hash'

//const mysql = require('mysql')
//const dotenv = require('dotenv').config()

function App() {
const [showLogin, setShowLogin] = useState(false)
const [showMainPage, setShowMainPage] = useState(false)
const [showRegister, setShowRegister] = useState(false)
const [showCreateList, setShowCreateList] = useState(false);
const [showAddToFamily, setShowAddToFamily] = useState(false);
const [id, setId] = useState(0)

const onSubmit = async (refUsername, refPassword) => {

  var res = await fetch('http://localhost:3001/user/log', {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: `{"username": "${refUsername}", "password": "${refPassword}"}`
  })
  res = await res.json()
  if(!res.login) return alert('Wrong username or password')
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

const back = () => {
  setShowLogin(true)
  setShowRegister(false)
  setShowMainPage(false)
}
  return (
    <>
    <div className='mainpage'>
      {!showMainPage &&<HeaderMainPage setShowLogin={setShowLogin} setShowRegister={setShowRegister} />}
      {showMainPage && <Header title='Shoping List' id_uzi={id} showIt={showMainPage} back={back} setShowCreateList={setShowCreateList} setShowAddToFamily={setShowAddToFamily}/>} 
      <div >
        <div className='main'>
      {showLogin && <Login onSubmit={onSubmit} onClickShowRegister={onClickShowRegister} setShowRegister={setShowLogin} setShowLoginos={setShowLogin} />}
      {showMainPage && <MainPage id={id} showCreateList={showCreateList} setShowCreateList={setShowCreateList} showAddToFamily={showAddToFamily} setShowAddToFamily={setShowAddToFamily}/>}
      {showRegister && <Register registered={registered} setShowRegister={setShowRegister}/>}
      </div>
      </div>
    </div>
    </>
  )
}

export default App;
