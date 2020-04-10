const express = require('express')
const app = express()
const port = 3000

const db = require('./db')

app.set('view engine', 'pug')


app.get('/', (req, res) =>{
	res.render('index')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))