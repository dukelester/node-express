const { response } = require('express');
var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead( 200, { 'content-type': 'text/plain' });
    response.end('Hello World\n');
    console.log('sdfghjkl;')
})

server.listen(7000)