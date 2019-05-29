const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.get("/", (req, res) => res.send({ message: "Hello from my app!" }));


app.get('/metadata', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/article', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/list', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/email', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/shared', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/viewed', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/reviews', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=' + yourkey;
    res.redirect(uri)
})

app.use((req, res, next) => {
    const error = new Error('Not Found!')
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

app.listen(port);
