
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