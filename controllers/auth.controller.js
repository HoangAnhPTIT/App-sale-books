db = require('../db')

module.exports.login = (req, res) => {
	res.render('./auth/login')
}


module.exports.postLogin = (req, res) => {
	var email = req.body.email
	var password = req.body.password
	var user = db.get('users').find({email:email}).value()

	if(!user){
		res.render('./auth/login',{
			errows: [
				"User is not exist"
			],
			values: req.body
		})
		return

	}
	if(password !== user.password){
		res.render('./auth/login',{
			errows: [
				"Wrong password"
			],
			values: req.body
		})
		return
	}

	res.redirect('/')
}