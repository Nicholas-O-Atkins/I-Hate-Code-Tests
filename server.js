const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

const app = express()

mongoose.connect('mongodb://127.0.0.1/webserver1')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    const articles = [{
        title: "Test",
        createdAt: new Date(),
        description: "Test desc"
    },{
        title: "Test2",
        createdAt: new Date(),
        description: "Test desc 2" 
    }]
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)