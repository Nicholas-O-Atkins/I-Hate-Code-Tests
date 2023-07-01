const express = require('express')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/blog', {
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) =>{
    const articles = [{
        title: 'Test Title',
        createdAt: new Date(),
        description: 'Test Descript'
    }]
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)