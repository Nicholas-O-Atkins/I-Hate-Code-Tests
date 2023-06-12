const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) =>{
    const articles = [{
        title: 'Test Title',
        createdAt: Date.now(),
        description: 'Test Descript'
    }]
    res.render('index', {articles: articles})
})

app.listen(5000)