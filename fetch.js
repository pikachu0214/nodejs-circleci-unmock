//Testing api with frontend fetch promise...

//nyt article metadata
fetch('http://localhost:3000/metadata')
    .then(req => req.json())
    .then(res => console.log(res))


//nyt article metadata
fetch('https://nyt-unmock.herokuapp.com/article')
    .then(req => req.json())
    .then(res => console.log(res))

//nyt bestseller
fetch('https://nyt-unmock.herokuapp.com/list')
    .then(req => req.json())
    .then(res => console.log(res))


//nyt most popular by emailed
fetch('https://nyt-unmock.herokuapp.com/email')
    .then(req => req.json())
    .then(res => console.log(res))


//nyt most popular by shared
fetch('https://nyt-unmock.herokuapp.com/shared')
    .then(req => req.json())
    .then(res => console.log(res))

//nyt most popular by viewed
fetch('https://nyt-unmock.herokuapp.com/viewed')
    .then(req => req.json())
    .then(res => console.log(res))

//nyt reviews
fetch('https://nyt-unmock.herokuapp.com/reviews')
    .then(req => req.json())
    .then(res => console.log(res))


