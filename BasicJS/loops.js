//loop
//forloop
for(let i=1; i<10; i++) {
    console.log("still working at %s'O clock", i);
    if(i%2!==0)
    console.log("printing odd numbers: %s", i);
}


//for-in loop -> Iterate items in an object

let person = {
    name:"Sandy",
    age:30
};

for(let key in person)
    console.log(key, person[key]);

let colors = ['red', 'yellow', 'blue'];
for(let index in colors)
    console.log(index, colors[index]);

let arr = [true, false, true, false, false]
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
let speedLimit = 70;
let kmPerPoint = 5;
let suspension = 12;

function checkSpeed(speed) {
    
    if (typeof speed !== 'number')
    return NaN;
    if (speed<=speedLimit + kmPerPoint)
    return 'OK'
    if(speed>speedLimit) {
       let limit = Math.floor((speed-speedLimit)/kmPerPoint);
        if(limit > suspension)
        return 'License Suspended';
    return ("Point : "+ limit);
    }
}

console.log(checkSpeed(76));