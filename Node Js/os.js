
let os = require('os');
const dns = require('dns');  // dns is a node module
let os_architecture = os.arch()


console.log(os_architecture)
console.log(os.endianness())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.networkInterfaces())
console.log(os.platform(), os.totalmem(), os.userInfo())


dns.lookup('www.dlestersofts.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});