const http = require("http");
const fs = require("fs");
const _ = require("lodash");


const server = http.createServer( (req, res) =>{
    console.log("The request was made")
    //lodash
    const num = _.random(0, 100);
    console.log(num)

    const greet = _.once(() =>{
        console.log("hello")
    });

    greet();
    greet();
    //response
    res.setHeader("Content-Type", "text/html");

    let file_path = './views/'
    let requested = req.url;

    switch (requested){
        case '/':
            file_path +='index.html';
            res.statusCode = 200;
            break;

        case '/about': 
            file_path +='about.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end()
        
        default:{
            file_path +='404.html';
            res.statusCode = 404;
        }
    }
   //send an htmlres.sendFile('path');
   fs.readFile(file_path, 'utf-8', (err, data) =>{
    if (err){
        console.log(err)
        res.end();
    }else{
        // res.write(data);
        // res.end();
        res.end(data);
    }

   })
});


//listen
server.listen(3000, 'localhost', ()=>{
    console.log("The server started and now its listening!! at http://localhost:3000")
})