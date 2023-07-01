const express = require('express')
const Article = require('./../models/article')
const article = require('./../models/article')
const router = express.Router()

router.get('/new', (req, res) =>{
    res.render('articles/new', {article: new Article()})
})

router.get('/:id', (res, req) => {

})

router.post('/', async (req, res) => {
    const article =  new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })

    try{
        await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (e){
        console.log(e)
        res.render('articles/new', {article: article})
    }
})

module.exports = router