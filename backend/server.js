const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

const login = require('./script/login')
const register = require('./script/register')
const list = require('./script/list')
const items = require('./script/items')
const user = require('./script/user')
const mail = require('./script/sendMail')
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

app.post('/user/getData', (req, res) => {
    const { id_uzi } = req.body
    user.getData(id_uzi, res)
})

app.post('/user/changeEmail', (req, res) => {
    const { id_uzi, email } = req.body
    user.changeEmail(id_uzi, email)
    res.sendStatus(200)
})

app.post('/user/changeUsername', (req, res) => {
    const { id_uzi, username } = req.body
    user.changeUsername(id_uzi, username)
    res.sendStatus(200)
})

app.post('/user/changePassword', (req, res) => {
    const { id_uzi, password } = req.body
    user.changePassword(id_uzi, password)
    res.sendStatus(200)
})

app.post('/user/deleteAccount', (req, res) => {
    const { id_uzi } = req.body
    user.deleteAccount(id_uzi)
    res.sendStatus(200)
})

app.post('/user/newPassword', (req, res) => {
    const { email } = req.body
    console.log(email)
    mail.sendPasswordMail(email)
    res.sendStatus(200)
})
app.post('/displayNewestList', (req, res) => {
    const { id } = req.body
    list.displayNewestList(id, res)
})

app.post('/list', (req, res) => {
    const { id_sez } = req.body
    list.getList(id_sez, res)
})

app.post('/item/add', (req, res) => {
    const {item, id_sta, id_sez, kusy} = req.body
    list.addItem(item, id_sta, id_sez, kusy)
    res.sendStatus(200)    
})

app.post('/item/delete', (req, res) => {
    const { id_pol } = req.body
    items.deleteItem(id_pol)
    res.sendStatus(200)  
})

app.post('/item/changeState', (req, res) => {
    const { id_pol, id_sta } = req.body
    items.changeState(id_sta, id_pol)
    res.sendStatus(200)  
})

app.post('/item/edit' ,(req, res) => {
    const { id_pol, nazev, kusy} = req.body
    items.changeItem(id_pol, nazev, kusy)
    res.sendStatus(200)
})

app.get('/item/types', async (req, res) => [
    res.send(await items.getAllTypes())
])
app.post('/list/createList', (req, res) => {
    const {id_uzi} = req.body
    list.createList(id_uzi) 
    res.sendStatus(200)  
})

app.post('/list/deleteList', (req,res) => {
    const {id_sez} = req.body
    list.deleteList(id_sez)
    res.sendStatus(200)  
})
