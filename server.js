const express = require('express')
const articleRouter = require('./routes/articles')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('articles/index', [{
        title: "Test",
        createdAt: Date.now,
        description: "Test desc"
    },{
        title: "Test2",
        createdAt: Date.now,
        description: "Test desc 2" 
    }])
})

app.use('/articles', articleRouter)

app.listen(5000)