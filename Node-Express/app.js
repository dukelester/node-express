const express = require('express');
// const serve_static = require('serve_static')
const app = express();
const morgan = require('morgan');

//register view engine
app.set('view engine', 'ejs');
app.use(express.static('./public'))
//listen for req

app.listen(3000);



//middleware

// app.use((req, res, next) =>{
//     console.log('new request');
//     console.log(req.url, req.hostname,req.path,req.method);
//     next();
// });
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) =>{
    // res.send('<h2>Home page</h2>')
    // res.sendFile('./views/index.html', {root: __dirname});
    let blogss = [
        {
          "id": 382285388,
          "handle": "banana-blog",
          "title": "A Gnu Blog",
          "updated_at": "2006-02-02T19:00:00-05:00",
          "commentable": "no",
          "feedburner": null,
          "feedburner_location": null,
          "created_at": "2022-04-05T12:51:55-04:00",
          "template_suffix": null,
          "tags": "",
          "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/382285388"
        },
        {
          "id": 241253187,
          "handle": "apple-blog",
          "title": "Mah Blog",
          "updated_at": "2006-02-01T19:00:00-05:00",
          "commentable": "no",
          "feedburner": null,
          "feedburner_location": null,
          "created_at": "2022-04-05T12:51:55-04:00",
          "template_suffix": null,
          "tags": "Announcing, Mystery",
          "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"
        }, {
            "id": 382285388,
            "handle": "banana-blog",
            "title": "A Gnu Blog",
            "updated_at": "2006-02-02T19:00:00-05:00",
            "commentable": "no",
            "feedburner": null,
            "feedburner_location": null,
            "created_at": "2022-04-05T12:51:55-04:00",
            "template_suffix": null,
            "tags": "",
            "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/382285388"
          },
          {
            "id": 241253187,
            "handle": "apple-blog",
            "title": "Mah Blog",
            "updated_at": "2006-02-01T19:00:00-05:00",
            "commentable": "no",
            "feedburner": null,
            "feedburner_location": null,
            "created_at": "2022-04-05T12:51:55-04:00",
            "template_suffix": null,
            "tags": "Announcing, Mystery",
            "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"
          }
      ]
    res.render('index', {title:"home", blogs:[]});

});

app.get('/about', (req, res) =>{
    // res.send('<h2>about page</h2>')
    // res.sendFile("./views/about.html", {root: __dirname});
    res.render('about', {title:"about us"});

});

app.get('/blogs/create', (req, res) =>{
    res.render("create", {title:"Create a blog"});
    console.log(req.body)
});


//post handler
app.post('/blogs', (req, res) =>{
  console.log(req.body)

})


//redirects
app.get("/about-us", (req, res) =>{
    res.redirect("/about");
});

//404 page
app.use((req, res) =>{
    // res.status(404).sendFile("./views/404.html", {root: __dirname});
    res.render('404', {title:"Page not found"});
});

