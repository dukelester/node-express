const file_system = require('fs')
const path = require('path')
// console.log(path)

// file_system.readFile('./app.js', 'utf-8', (err, data)=>{
//     console.log('read file')
//     if (err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

file_system.readFile("./docs/test.txt",'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

console.log('********duke lester*********')
//creating a file
file_system.writeFile("./docs/test.txt", "duke lester is a developer and doing a full stack", ()=>{
    console.log('write file success')
});
file_system.writeFile("./docs/about_me.txt", "duke lester is a developer and doing a full stack", ()=>{
    console.log('write file success')
});

//create, delete directories

if (!file_system.existsSync('./assets')){
    file_system.mkdir("./assets", (err)=>{
        if (err){
            console.log('Error', err);
        }else{
            console.log("success");
        }
    })
}else{
    console.log('assets folder already exists removing it ...')
    file_system.rmdir('./assets', (err)=>{
        if (err){
            console.log(err);
        }else{
            console.log('... successfully removed!');
        }
        
    })
}

//deletes a file
if (file_system.existsSync('./docs/deleteme.txt')){
    file_system.unlink("./docs/deleteme.txt", (err)=>{
        if (err){
            console.log(err);
        }else{
            console.log('... successfully deleted file!');
        }
    })
}else{
    console.log('file does not exist ... exiting!')
}
