const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

const login = require('./script/login')
const register = require('./script/register')

app.use(express.json()); // parsuje payload na requestu do jsonu
app.use(cors())//pouziva knihovnu cors na to aby nebyl cors error



app.listen(process.env.port, ()=>{
    console.log('server running on port: ' + process.env.port)
})


app.post('/reg', (req, res) =>{
    const { username, password} = req.body
    register.register(username, password, res)
    
})

app.post('/log', (req, res) => {
    const { username, password } = req.body
    login.login(username,password, res)
})

app.get('/app:uid', (req, res) => {
    const uid = req.params

})





