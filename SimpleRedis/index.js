import express from 'express';
import fetch from 'node-fetch';
import redis from 'redis';


let PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);
await client.connect();
const app = express();
//set response

function sendResponse(username, repos){
    return `<h2>${username} has ${repos} GitHub Repositories</h2>`
}
//make req to github
async function getRepos(req, res, next) {
    try{
        console.log('Fetching data ...')

        const { username } = req.params;
        console.log(username)
        const response = await fetch (`https://api.github.com/users/${username}`) ;
        const data = await response.json();
        const repos = data.public_repos;
        //set data in redis
        client.setEx(username, 3600, repos);
        res.send(sendResponse(username, repos));

    }catch(err){
        console.log(err);
       res.status(500).json(err);
    }
}

//cache middleware
function cache(req, res, next){
    const { username } = req.params;
    client.get(username,( err, data) =>{
        if ( err){
            throw err
        }else{
            if(data !==null){
                res.send(sendResponse(username,data))
            }else{
                next();
            }

        }
    })
}
app.get('/repos/:username',cache, getRepos);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🔥`)
    console.log("http://localhost:5000")
});