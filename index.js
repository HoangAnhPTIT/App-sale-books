const express = require('express')
const app = express()
const port = 3000

const signinRoute = require('./routes/auth.route')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set('view engine', 'pug')


app.get('/', (req, res) =>{
	res.render('index')
})

app.use('/auth',signinRoute)




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))