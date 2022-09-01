 
import express from 'express';
// import { getDb, databaseConnection } from './db.js';
import * as dotenv from 'dotenv';
import  authRouters from './routes/AuthRoutes.js'
import mongoose  from 'mongoose';
import cookieParser from 'cookie-parser';
import { checkUser, requireAuth } from './middleware/authMiddleware.js';
dotenv.config()
const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(cookieParser());
const port = process.env.PORT || 5000;

app.get('*', checkUser);
app.get('/', (req, res) =>{
    // res.send('Welcome to authenication')
    res.render('index')
});

app.get('/blog', requireAuth, (req, res) =>{
  res.render('blogs')
})

app.use(authRouters);

// export let db;
// databaseConnection ((err) =>{
//     if(err) {
//         throw err
//     }else{
//         app.listen(port, () =>{
//             console.log('Connection to server success ...');
//             console.log(`Visit http://localhost:${port}`)
//         });
//        db = getDb();
//     }
// })


try {
     mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () =>{
    console.log('Connection to server success ...');
    console.log(`Visit http://localhost:${port}`)
});
  } catch (error) {
   console.log(error.message)
  }


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // set and read cookies 

// app.get('/set-cookies', (req, res) =>{
//     // res.setHeader('Set-Cookie','newUser=true');
//     res.cookie("newUser", false);
//     res.cookie("isEmployee", 'I am an employee..');
//     res.cookie("I will have time ", { maxAge:200, secure:true })
//     res.cookie('Available on http only', { maxAge: 1000 * 60 * 60 * 24, httpOnly:true })
//     res.send('You got a cookie ....')

// });

// app.get('/read-cookies', (req, res) => {
//     const cookies = req.cookies;
//     console.log(cookies);

//     res.json(cookies)
//     console.log(cookies.newUser, cookies.isEmployee)

// });