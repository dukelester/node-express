import express from 'express';
import bodyParser from 'body-parser';

//imports routers from other folders
import usersRoutes from './routes/users.js';

const app = express(); //create the app
app.use(bodyParser.json()); //use body parser to parse the body of the request

//use the routers
app.use("/users", usersRoutes);



const PORT = 5000; //port to listen on
const port = process.env.PORT || 5000;




app.get('/', (req, res) =>{
    res.send("Welcome to our Crud API with Node")
});







app.listen(port, (err)=>{
    if(err){
        throw err
    }else{
        console.log(`Server is running on http://localhost:${port}`)
    }

});


