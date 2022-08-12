const express = require('express'); //import express library

const app = express();//create the app

app.get('/',(req, res) =>{
    console.log('Welcome ...')
    res.send("Hello duke welcome to the home page")
});

app.listen(5000, ()=>{
    console.log('The server is listening at the http://localhost:5000')
});