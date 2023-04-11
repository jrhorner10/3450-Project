const express = require('express')
const app = express()
const port = 8383
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./database.sqlite')

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.listen(port, () => console.log('Server has started'))

app.post('/addHome', (req, res) => {
    console.log('hey')
})

app.post('/addPerson', (req, res) => {
    
})

app.post('/addAgent', (req, res) => {
    
})