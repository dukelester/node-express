const file_system = require('fs');

//createReadStream() and 

const readStream = file_system.createReadStream("./docs/blog3.txt", 'utf-8');
const writeStream = file_system.createWriteStream("./docs/blog4.txt");

// readStream.on('data', (chunk)=>{
//     console.log("==================================New Chunk ====================================================");
//     console.log(chunk)
//     writeStream.write('\n NEW CHUNK\n')
//     writeStream.write(chunk)

// });

//using piping

readStream.pipe(writeStream)

