const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

const login = require('./script/login')
const register = require('./script/register')
const list = require('./script/list')
const items = require('./script/items')

app.use(express.json()); // parsuje payload na requestu do jsonu

app.use(cors())//pouziva knihovnu cors na to aby nebyl cors error

app.listen(process.env.port, ()=>{
    console.log('server running on port: ' + process.env.port)
})

app.post('/user/reg', (req, res) =>{
    const { username, password, email } = req.body
    register.register(username, password, email, res)
})

app.post('/user/log', (req, res) => {
    const { username, password } = req.body
    login.login(username,password, res)
})

app.post('/displayNewestList', (req, res) => {
    const id = req.body
    list.displayNewestList(id.id, res)
})

app.post('/list', (req, res) => {
    const { id_sez } = req.body
    list.getList(id_sez, res)
})

app.post('/item/add', (req, res) => {
    const {item, id_sta, id_sez, kusy} = req.body
    list.addItem(item, id_sta, id_sez, kusy)
    res.send('Worked')    
})

app.post('/item/delete', (req, res) => {
    const { id_pol } = req.body
    items.deleteItem(id_pol)
    res.send('worked')
})

app.post('/list/createList', (req, res) => {
    const {id_uzi} = req.body
    list.createList(id_uzi) 
    res.send('worked')
})

app.post('/list/deleteList', (req,res) => {
    const {id_sez} = req.body
    list.deleteList(id_sez)
    res.send('worked')
})