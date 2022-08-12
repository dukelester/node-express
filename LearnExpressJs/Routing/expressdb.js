const MongoClient = require("mongodb").MongoClient

MongoClient.connect("mongodb://localhost:27017/test", (err, db) =>{
    if (err){
        throw err

    }else{
        console.log('connection success', db)
        db.collection("customers").find({}).toArray((err, docs) =>{
            if (err){
                throw err
            }else{
                console.log(docs)
            }
        });
    }
})