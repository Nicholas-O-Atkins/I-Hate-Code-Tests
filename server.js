const express = require('express')
const articleRouter = require('./routes/articles')

const app = express()

app.set('view engine', 'ejs')

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