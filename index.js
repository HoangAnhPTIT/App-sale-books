const express = require('express')
const app = express()
const port = 3000

const signinRoute = require('./routes/auth.route')
const articleRoute = require('./routes/article.route')
const authMiddleware = require('./middleWare/auth.middleware')

var cookieParser = require('cookie-parser')

app.use(cookieParser('saasefawef3r23fecas'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set('view engine', 'pug')


app.get('/', (req, res) =>{
	res.render('index')
})

app.use('/auth',signinRoute)

app.use('/article',authMiddleware.requireAuth, articleRoute)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))