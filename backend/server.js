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
const shop = require('./script/shop')

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

app.post('/user/getData', async (req, res) => {
    res.send(await user.getData(req.body))
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
    mail.sendPasswordMail(email)
    res.sendStatus(200)
})

app.post('/user/isAdminOfFamily', async (req, res) => {
    res.send(await user.chechIfAdminOfFamily((req.body).id_uzi))
})

app.post('/user/isAdmin', async (req, res) => {
    res.send(await user.isAdmin(req.body))
})

app.post('/displayNewestList', (req, res) => {
    const { id } = req.body
    list.displayNewestList(id, res)
})

app.post('/list', async (req, res) => {
    res.send(await list.getList(req.body)) 
})

app.post('/list/setPrice', async (req, res) => {
    list.setPrice(req.body)
    res.sendStatus(200)
})

app.post('/item/add', (req, res) => {
    list.addItem(req.body)
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

app.get('/item/howManyTypes', async (req, res) => {
    res.send(await items.getHowManyTypes())
})

app.post('/item/getSortBy' , async (req, res) => {
    res.send(await items.getSortBy(req.body))
})
app.post('/list/createList', (req, res) => {
    list.createList(req.body) 
    res.sendStatus(200)  
})

app.post('/list/deleteList', (req,res) => {
    list.deleteList(req.body)
    res.sendStatus(200)  
})

app.post('/list/setType', (req, res) => {
    list.addType(req.body)
    res.sendStatus(200)
})

app.post('/inviteFamily' , (req, res) => {
    user.addToFamily(req.body)
    res.sendStatus(200)
})

app.post('/type/createShop', (req, res) => {
    
})

app.get('/type/getShops', async (req, res) => {
    res.send(await shop.getShops())
})

app.post('/shop/delete', (req, res) => {
    shop.deleteShop(req.body)
    res.sendStatus(200)
})

app.post('/shop/getPosition', (req, res) => {
    res.send(shop.getPosition(req.body))
})