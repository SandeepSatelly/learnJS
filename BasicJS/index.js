/* console.log('Hello World - From JS file');
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



//Garbage Collection in JS automated - Maintains memory by allocating and deallocatin

//Math - Object
console.log(Math.round(Math.random() * (90 - 20) + 20)/100);
const name = 'sandy';
//Template literals used with `` 
const templateLiteral = `Hi ${name},
How are you?

Hope everthing is good!

Thanks
Sandy`;

console.log(templateLiteral);


//Date object
 const dateToday = new Date();

*/

//Arrays