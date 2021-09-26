const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

const login = require('./script/login')
const register = require('./script/register')
const list = require('./script/list')

app.use(express.json()); // parsuje payload na requestu do jsonu

app.use(cors())//pouziva knihovnu cors na to aby nebyl cors error



app.listen(process.env.port, ()=>{
    console.log('server running on port: ' + process.env.port)
})


app.post('/reg', (req, res) =>{
    const { username, password } = req.body
    register.register(username, password, res)
    
})

app.post('/log', (req, res) => {
    const { username, password } = req.body
    login.login(username,password, res)
    //console.log(username, password)
})

app.get('/list', (req, res) => {
    const user = req.body
    list.displayNewestList(user.user, res)
})