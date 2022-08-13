//connect to the database

import { MongoClient } from 'mongodb';

let db_connection;
const mongo_connect_string  = 'mongodb://localhost:27017/Hotels';
// const mongo_connect_string = "mongodb+srv://dukelester:Kali@lester2030@cluster0.guygb.mongodb.net/?retryWrites=true&w=majority"

export const connectToDatabase = async (call_back)=>{
    try{
        await MongoClient.connect(mongo_connect_string)
        .then((client) =>{
            console.log("Connected to the database");
            db_connection = client.db();
            return call_back();
        }).catch((err) =>{
            console.log(err);
            call_back(err);
        });
    }catch(err) {
        console.log(err);
        throw err;
    }
};

export const getDb = () =>{
    return db_connection;
}