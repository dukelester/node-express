const os = require('os');
// const svr = require('./net_server'); // modules
// const people = require("./data")
const { people, animals } = require("./data") // destructuring

console.log(global);

setTimeout( () =>{
    console.log('hello');
    clearInterval(area)
}, 3000);

const area = setInterval(() =>{
    let circle = (radius)=>{
        let area = radius * radius * Math.PI;
        console.log(area)
    }
    circle(9)
    
}, 1000)
console.log(people, animals)