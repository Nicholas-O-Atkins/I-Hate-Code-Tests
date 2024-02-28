const express = require('express')
const mongoose = require('mongoose')

// Declare the routers and models
// Articles
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
// Assets

// Audits

// Releases

// Page Errors

// Method overrides
const methodOverride = require('method-override')

const app = express()
// Mongoose connection
mongoose.connect('mongodb://127.0.0.1/webserver1')
// view engine for rendering
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

// Setting the deafault to index of Article 
// TODO change to index for DCS homepage
app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', { articles: articles })
})

// Routers
app.use('/articles', articleRouter)

app.listen(5000)