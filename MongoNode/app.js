import express from 'express';
import { connectToDatabase, getDb }  from "./db.js";
import hotelRoutes from './routes/hotelRoutes.js';

const app = express ();

const port = 3000;

//connect to the database
export let db;
connectToDatabase((err) =>{
    if (err){
        console.log(err);
    }else{
        app.listen(port, () =>{
            console.log("The server is listening at http://localhost:3000")
        });
        db = getDb();
    }
});


app.use("/hotels", hotelRoutes);