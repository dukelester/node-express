// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const admin = express(); // admin sub app
const cart = express(); // sub app for the cart
const router = express.Router();
// const ejs = require('ejs');
// app properties
//app.locals

app.use(bodyParser.json());
app.locals.title = "Duke Lester";
app.locals.email = "dukelester4@gmail.com";
app.locals.phone = "917-555-5555";
app.locals.address = "123 Main Street, Anytown, CA 12345";

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//app.mountpath
// app.mountpath = ""
admin.get('/', (req, res) =>{
    res.send('Admin Home Page');
});
cart.get('/', (req, res) =>{
    res.send(`welcome to the cart mounted at ${app.mountpath}`);
});
//mount the app
app.use('/admin', admin) ;
app.use('/cart', cart);



app.get('/', (req, res) =>{
    res.send(`Hello World,${app.locals.address}, ${app.locals.email}, ${app.locals.phone}, ${app.locals.title} `);
    console.log(app.locals.address, app.locals.email, app.locals.phone, app.locals.title)
});


//Events

//app.on(mount, callback)

admin.on('mount', (parent) =>{
    console.log('Mounted admin sub app at ' + parent.mountpath);
});

app.use('/admin', admin)

app.disable('trust proxy');
app.get('trust proxy')

app.disabled('trust proxy');
app.enable('trust proxy');
app.enabled('trust proxy');

//set the template view
// app.engine('pug', require('pug').__express);

console.log(app.get('title'))
app.set('title', 'Express Js Api');
console.log(app.get('title'))
app.set('details',{
    "name":"express js API",
    "author": "Duke Lester",
    "email": "dukelester4@gmail.com"
})
console.log(app.get('details'))

app.get('/home', (req, res) =>{
    res.send('The home page');
   
});

app.get('/homepage', (req, res, next) =>{
    res.send('The home page')
    next();
}, (req, res, next) =>{
    res.send('The home page')
    next();
}, (req, res, next) =>{
    res.send('The home page')
    // next();
} );

let User = {}
app.param('user', function (req, res, next, id) {
    // try to get the user details from the User model and attach it to the request object
    User.find(id, function (err, user) {
      if (err) {
        next(err)
      } else if (user) {
        req.user = user
        next()
      } else {
        next(new Error('failed to load user'))
      }
    })
  })

router.get('/hellohere/:name', (req, res) =>{
    res.send('Hello World');
    console.log(req.params.name);
    console.log(req.protocol)
    console.log(res.signedCookies)
    console.log(req.body, req.ip, req.hostname, req.baseUrl, req.path, req.method);
    console.dir(req.subdomains)


    req.accepts('text/html')
    // => "text/html"
    req.accepts(['json', 'text'])
    // => "json"
    req.accepts('application/json')
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png')
    req.accepts('png');

    console.log(req.params.name)
});

app.use(router)
app.listen(3000, (err) =>{
    if(err){
        console.log(err.stack)
    }else{
        console.log("The app is running at http://localhost:3000");
    }
})