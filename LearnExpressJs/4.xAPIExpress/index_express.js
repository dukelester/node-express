//Creates an Express application. The express() function is a top-level function exported by the express module.

const express = require('express');
const app = express(); //creating an app
const path = require('path');
//methods
//express.json([options])

app.use(express.json(limit="200kbs", verify=true,
 (req, res, next)=>{
    console.log(req.body,res.append('field', "duke lester"))
    next();
 },
  type="application/json", inflate=true
  ));

//   express.raw([options])
// app.use(express.raw())

//express.Router([options]) ==> creates a new router object.

// const router = express.Router(caseSenstive=true, mergeParams=true, strict=true);
const router = express.Router();

router.use((req, res, next) =>{
    res.send('hello');
    next();
});
router.get('/hello',(req, res) =>{
    res.send('hello');
} )

// express.static(root, [options]) ==> serve static files
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', 'css', '.jpeg', ],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  };

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.text())

app.use(express.urlencoded())









app.get('/', (req, res)=>{
    res.send("hello duke lester and express")

});











app.listen(3000, () =>{
    console.log("server at http://localhost:3000")
})