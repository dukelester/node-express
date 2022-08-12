const net = require('net');

console.log(net)

let server = net.createServer((server) =>{
    server.end('Hello Lester welcome to node js')
}).on('error', (err) => {  
    // handle errors here  
    throw err;  
  });  

  server.listen(() => {  
    address = server.address();  
    console.log('opened server on %j', address);  
  });  