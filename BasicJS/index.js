console.log('Hello World - From JS file');
let firstName = 'name';
let age = 30;
console.log(firstName, age);

//Setting object - KeyValue pair
let person = {
    firstName: 'Sandeep',
    lastName: 'Satelly',
    age: 30
};
console.log(person);
person.firstName = 'sandy'
console.log(person);

//Setting Arrays
let selectedColors = ['Red', 'Blue', 'Green'];
console.log(selectedColors[0]);
selectedColors[3] = 'Yellow';
console.log(selectedColors);
selectedColors[4] = 4;
console.log(selectedColors);

//function with 2 parameters
function greet(firstName, lastName) {
    console.log('Hello %s %s', firstName, lastName);
}

greet('Sandy', 'Satel');


//Ternary operator
let points = 110;
let type = points>100 ? 'GOLD' : 'SILVER';
console.log(type)

//boolean values with non-boolean values
console.log(false || 'sandy')
//^^ this prints sandy which is truthy because it checks right side variable
//checks first variable goes from left to right and stops when it finds a truth value

//Bitwise Operators
//bitwise OR has only single '|'
console.log(1 | 2); //output is 3

//bitwise AND has only single '&'
console.log(1 & 2); //output is 0
//^^Used in accessControl system
//example of bitwise real time use
const readPermission = 4;//this is the decimal value we got for read 0000100
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let currentPerm = (myPermission & readPermission) ? 'yes' : 'no';
console.log(currentPerm);


//swapping variables
let a = 'red';
let b = 'blue';
console.log(a, b);
let c = null;
c = a;
a = b;
b = c;
console.log(a, b); 

//if else
let currentTime = 13;
if (currentTime>=6 && currentTime<=12) 
    console.log('Good morning!');
 else if (currentTime >12 && currentTime<=18) 
    console.log('Good afternoon!');
 else 
    console.log('Good evening!');

//switchCase

let role = 'worker';

switch (role) {
    case 'guest': 
    console.log("Guest User");
    break;
    case 'moderator': 
    console.log("Moderator");
    break;
    case 'worker': 
    console.log("Worker");
    break;
    case 'admin': 
    console.log("Admin");
    break;

    default:
    console.log("Unknown user");
}

//LOOP
//ForLoop

for(let i=1; i<10; i++) {
    console.log("still working at %s'O clock", i);
    if(i%2!==0)
    console.log("printing odd numbers: %s", i);
}


//for-in loop -> Iterate items in an object

const person = {
    name:"Sandy",
    age:30
};

for(let key in person)
    console.log(key, person[key]);

const colors = ['red', 'yellow', 'blue'];
for(let index in colors)
    console.log(index, colors[index]);

const arr = [true, false, true, false, false]
let s = 0;
for(let index in arr){
    if (arr[index] === false){
        s++;
    }
}
console.log(s);


//for-of loop -> Iterate over items in an array
//general sybntax - for(let element of array) 
for(let color of colors)
    console.log(color);

s = 0;
for(let i of arr){
    if (i === true)
        s++;
    }
console.log(s);

//Here we are returning the number and in 2nd example we are returning boolean value
//We don't need to mention true or false, return statement takes care
function max(a,b){
return a>b ? a: b;
}
console.log(max(13,5));

function max2(a,b){
    return a>b;
    }
console.log(max2(13,5));

function fizzBuzz(input) {
    if (typeof input !== 'number') 
        return NaN;

    if(input % 3 === 0 && input % 5 === 0)
         return 'fizzBuzz';
        
    if(input%3 === 0)
           return 'fizz';
        
    if(input%5 === 0)
           return 'buzz';
    return input;
}
console.log(fizzBuzz(5));

//check speed limit 
//speed limit 70 ; each 5 + on 70 is 1 point ; 12 points suspend
const speedLimit = 70;
const kmPerPoint = 5;
const suspension = 12;

function checkSpeed(speed) {
    
    if (typeof speed !== 'number')
    return NaN;
    if (speed<=speedLimit + kmPerPoint)
    return 'OK'
    if(speed>speedLimit) {
       const limit = Math.floor((speed-speedLimit)/kmPerPoint);
        if(limit > suspension)
        return 'License Suspended';
    return ("Point : "+ limit);
    }
}

console.log(checkSpeed(76));