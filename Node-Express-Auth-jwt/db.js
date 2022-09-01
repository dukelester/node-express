import { MongoClient  } from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config();
import { mongoose } from 'mongoose'

const mongo_url = process.env.MONGO_URL
let db;
let database_connection;
export const databaseConnection = async (callback) => {
    try{
        // MongoClient.connect(mongo_url)
        // .then((client) => {
        //     database_connection = client.db()
        //     return callback()
        await mongoose.connect(mongo_url)

        // }).catch((err) => {
        //     console.log(err.message)
        // })
        
    } catch {
        console.log('an error occurred while trying to connect ..')
    }
}

// export const getDb = () =>{
//     return database_connection

// }