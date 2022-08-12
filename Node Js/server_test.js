let http = require('http');

var server = http.createServer(
    function(request, response){
        response.writeHead(200, {'content-type':'text/plain'});
        response.end ('Hello Lester welcome to node js')
    }
);
server.listen('4000')

console.log('server listening on port 4000','http://127.0.0.1:4000')