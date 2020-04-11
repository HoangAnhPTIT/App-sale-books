const shortid = require('shortid');
const db = require('../db')

module.exports.article = (req, res) => {
	res.render('./article/createArticle')
}


module.exports.postArticle = (req, res ) => {
	req.body.id = shortid.generate();
	db.get('article').push(req.body).write()

	res.redirect('/article')
}


module.exports.index = (req, res) => {
	res.render('./article/index',{
		articles: db.get('article').value()
	})
}

module.exports.getId = (req, res) => {
	var id = req.params.id
	var article = db.get('article').find({id:id}).value()
	res.render('./article/detail',{
		article: article
	})

}