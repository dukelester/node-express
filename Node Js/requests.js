var request = require('request');
request("https://google.com", function(err, response,body){
    console.log(JSON.stringify(body))
})