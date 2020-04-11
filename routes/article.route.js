const db = require('../db')

const express = require('express')

const router = express.Router()

const controller = require('../controllers/article.controller')

router.get('/create', controller.article)
router.post('/create',controller.postArticle)

router.get('/',controller.index)

router.get('/:id', controller.getId)

module.exports = router