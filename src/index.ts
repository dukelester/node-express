// let num : number = 90;

// if (num > 50) {
//     console.log("num is greater than 50");
// }

let sales :number = 12455667;
let course: string = "Angular";
let isActive: boolean = true;

let my_name = "duke lester";

function marks(mark:number){
    console.log(mark)
}

//arrays
let myNumbers = [ 2,3,4, 'hello'];
let myStrings = ['hello', 'world'];
let myBooleans = [true, false];
let hello: number [] = [34,45,6];

myNumbers.forEach(n => n.toLocaleString)

//tuples
let myTuple: [string, number] = ['hello', 34];
let tuple2: [number, string, number] = [23, 'juja', 900]

myTuple.push('world');
console.log(myTuple);

//constants

const k = 22;

//functions
function claculateTax(income:number, tax:number=2022) : number{
    if (tax < 2022) {
        return income * 0.9;
    }
    return income * 1.9;
}

claculateTax(1000, 2020);


//objects
type Employee ={
    readonly id:number, name:string, age:number
    retire:(date:Date) => void
}
let employee:Employee = { id:1, name:'duke', age:34, retire:(date:Date) => {console.log(date)}};
// employee.id = 0

function kgToLbs(weight: number | string ):number{
    //narrowing
    if(typeof(weight) === 'number')
    return weight * 2.2;
    else
    return parseInt(weight) * 2.2;
}

let weight1 = kgToLbs(100);
let weight2 = kgToLbs('100kg');
console.log(weight1, weight2)


type Draggable ={
    drag: () => void
}
type Resizeable ={
    resize: () => void
}

type UIWidget = Draggable & Resizeable;
let textBox:UIWidget = {
    drag: () => {
        console.log('dragging')
    },
    resize: () => {
        console.log('resizing')
    }
}

console.log(textBox)


//literal types

let quantity:50 | 100 = 50;

type Quantity = 50 | 100;
let qty: Quantity = 100;

console.log(qty)

//null


function greet(name:string | null | undefined){
    if(name){
        console.log('hello ' + name)
    }
    else{
        console.log('Holla!1')
    }
}


greet(null);
greet(undefined);
greet('duke');

//optional chnainig
type Customer ={
    birthday : Date
}

function getCustomer(id:number) : Customer |null | undefined{
    return id === 0 ? null : { birthday: new Date() };

}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear());

let myt:[string, number] = ['hello', 34];



let a: number = 89;
// let a :number = 90;
var wa : number = 89;
var wa: number = 99;

let mydata:number[]  = [89, 776,222,3,2,344,55,66,77,88,99,100];

for (let num in mydata)
    console.log(mydata[num])


    //distructuring and spread

let input = [9,75,776,222,3,2,344,55,66,77,88,99,100]
let first = input[0];
let second = input[1];
let third = input[2];
let fourth = input[3];
let fifth = input[4];

console.log(first, second, third, fourth, fifth)

let [first1, second1, third1, fourth1, fifth1] = input;

console.log(first, second, third, fourth, fifth)
let [n1, ...rest] = [9,75,776,222,3,2,344,55,66,77,88,99,100];
console.log(n1, rest);

// let [totalDate,year, month, day] | null = /^(d\d\d\d)-(d\d\)-(d\d)$/.exec('2019-12-31') ;

let emp ={
    id:1,
    emp_name:'duke',
    emp_age:34,
    emp_location:"juja"
}

let {id, emp_name, emp_age, emp_location } = emp
console.log(id, emp_name, emp_age, emp_location)

let Car ={
    brand:'Toyota',
    model:'Corolla',
    year:2019,
    color:'red',
    owner:{
        name:'duke',
        age:34,
        location:'juja'

    },
    hobbies:['music', 'sports', 'movies', 'reading']


}

let { brand , ...car_rest} = Car;
console.log(brand, car_rest)
console.log(car_rest.color, car_rest.model, car_rest.year)
let { owner:{name:fullName, age:myAge, location:comefrom}, hobbies:[hob1, hob2, ...rest_hob]} = Car;
console.log(fullName, myAge, comefrom)
console.log(hob1, hob2, rest_hob)

//optional and default values for a function parameters

//? means optional

function foo(p1:{a:string, b?:number}){
    console.log(p1.a, p1.b)
//or
    let { a , b } = p1;
    console.log(a,b)
}
foo({a:'hello', b:89})

type UserDetails = {
    username:string,
    userage?:number ,
    userlocation:string,
    userPhone?:string

}

function getUserDetails(user:UserDetails){
    let {userage = 20,userPhone = '0799554425'} = user;
    console.log(userage, userPhone)
    console.log(user.username, user.userage, user.userlocation, user.userPhone)
}
getUserDetails({username:'duke', userlocation:'juja'})


//spread
let myfinale = [...myNumbers, ...myStrings, ...myBooleans];
console.log(myfinale)

let myObject = {numb:myNumbers, str:myStrings, bool:myBooleans}
// let otherObj = [...myObject, namess:"dukelester"]

//classes

class Person{
    Fisrt_name : string;
    DOB:Date
    phoneNumber: string
    constructor(first_name:string, dob:Date, phoneNumber:string){
        this.Fisrt_name = first_name;
        this.DOB = dob;
        this.phoneNumber = phoneNumber;
    }

    show(){
        console.log(`${this.Fisrt_name} is ${this.DOB.getFullYear()} years old`)
    }
}

let p = new Person('duke lester', new Date(1990,11,12), '0799554425');
p.show()