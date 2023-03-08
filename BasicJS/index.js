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



//Arrays
const numbers = [1,2,3,4,5];

//add elements to end of the array
numbers.push(6);

//add elements to start of the array
numbers.unshift(0);

//replace elements to middle of the array 
numbers.splice(2,1); //(fromWhichIndex to start, how many to remove)

console.log(numbers);

//remove last element
numbers.pop();

//remove first element
numbers.shift();

console.log(numbers);

//Emptying an array
//method 1 - assign it to empty array if it's declared as Let
//method 2 - set length property to zero
numbers.length = 0;
console.log(numbers);
//method 3 - use splice method
//method 4 - use pop method and use it in loop 
while(numbers.length>0)
    numbers.pop();
    console.log(numbers);
    

//slicing and combining arrays

const first = [1,2,3];
const second = [4,5,6];
const third = [{id:1, value:2}];

const combined = first.concat(second);
console.log(combined);

const combined2 = third.concat(second);
console.log(combined2);

const divideArray = combined.slice(1);
console.log(divideArray);

//spread operator

const spreadCombined = [...first,...second];//syntax '...' followed by the array to be combined
console.log(spreadCombined);

//iterating an array
const numbers = [1,2,3,4,5,6,7];
for(let number of numbers)
    console.log(number);
    //OR
//forEach
numbers.forEach((number) => console.log(number)); //we can add index to parameters as well to get the index of each element

//JOIN - Array
const joined = numbers.join(','); //converting array to string with a seperator as needed;
console.log(joined);

const message = "this is my first message";
const parts = message.split(' '); //converting to an array using space as a seperator 

console.log(parts);

const joinAgain = parts.join('-'); //converting it back to string using join
console.log(joinAgain);
//^^ these methods are useful when taking in URL with spaces and converting to url without spaces

//Sorting arrays
numbers.sort(); //Ascending order
numbers.reverse(); //descending order

//Every; Some -> new methods in JS
//Every will check all the elemnets of an array to see they pass the given confidtion
//Some will check all the elements and pass even if few of them do not meet the condition -> 
//checks 1st element and if it matches criteriaexits the loop
const num = [1,-1,2,3];
const everyPositive = num.every(function(value) {
    return value >=0;
});
const somePositive = num.some(function(value) {
    return value >=0;
});
console.log(everyPositive);
console.log(somePositive);

//filtering an array
//return only positive
const filterNum = num.filter((value) => value >= 0);
console.log(filterNum);//gives us all the postive numbers whici match the criteria
//Useful real life exmaple would be to filter restaurants that are OPEN right now?
const openOrclose = ['open', 'close','open', 'close','open', 'close','open', 'close','open', 'close',];
const filterOpen = openOrclose.filter(open => open === 'open');
console.log(filterOpen);

//Mapping an ARRAY
const mapNum = [1,-1,2,3,4];
const itemsMapped = mapNum.map(n=>'<li>' + n + '</li>');
const html = '<ul>' + itemsMapped.join('') + '</ul>';
console.log(itemsMapped);
console.log(html);//Mapped to a bullet list

//Mapping to an obejct - we have to use '()' so js engine doesn't look at it like a code block
const itemsMapFunc = mapNum.map(n=> ({value:n})); 
console.log(itemsMapFunc);

//We can chain these functions 
const chaining = mapNum
//filter the array 
                .filter(n=>n>0)
                //map it to an object
                .map(n=>({value:n}))
                //we use .value because it's now in an object 
                .filter(obj=>obj.value>1);

console.log(chaining);


//Reducing an array
//can reduce all the elements in to a single element ex: [1,2,3] = will give us 6 when we use the reduce
const numReduce = [1,-1,2,3,4,5];

// *  each iteration current value will be set to value from array
// * we initialise accumulator value - 0 or anything to begin with
// * The loop runs adding 1st currentValue to accumulator
// * 2nd round starts and takes 2nd index value as currentValue and 
// * add it to accumulator which stores the previous sum 
// * if no value is given to accumulator it will take the first element value

const sumReduce = numReduce.reduce(
    (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sumReduce);


//Exercise 1 - Arrays
const arrayRange = arrayFromRange(-8,-4);

function arrayFromRange(min, max) {
    const output =[];
    const minOfBoth = Math.min(min, max);
    const maxofBoth = Math.max(min, max);
    for(let i = minOfBoth; i<=maxofBoth; i++)
        output.push(i);
   console.log(output);
}

//Exercise 2 - Write includes

const numInclude = [1,2,3,4,5];

function isNumIncluded(array, value) {
    for(let key of array)
        if(key === value) 
        return true;
    return false;
}

console.log(isNumIncluded(numInclude, 5));


//Exercise 3 - Exclude

const numExclude = [1,2,3,4,1,2,1];

const output = except(numExclude,[1,2]);
console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if(!excluded.includes(element))
            output.push(element);
        return output;
    // for(let key of array) {
    //     for(let hole of excluded)
    //     if(key === hole) {
    //         array.pop(hole);
    //     }
    // }
    // console.log(array);
}


//Exercise 4 - Move an element

const numMove = [1,2,3,4,5];
const outputmove = move(numMove, 1 , 1);
console.log(outputmove);

function move(array, index, offset){
    const position = index + offset; //
    if(position>=array.length || position < 0){
        console.error('Invalid offset');
        return; 
    }
    const output = [...array];
    const delElement = output.splice(index, 1)[0]; //delete 1 element from given index and stores it in an array which we are getting through [0]
    console.log(delElement);
    output.splice(position, 0 , delElement); 
    return (output);
} 


//Exercise 5 - Count occurences
const numCount = [1,2,1,2,1,2];

const numOccur = countOccurences(numCount, 1);
console.log(numOccur);

function countOccurences(array, searchElement){
    // let count = 0;
    // const a =[];
    // for (let key of array){
    //     if(key === searchElement){
    //     count+=1;
    //     a.push(key);
    //     }
    // return count;
    // }
    //Using reduce function
    return array.reduce(
        (accumulator, currentvalue) => {
        const occurences = (currentvalue === searchElement) ? 1:0; // if true add 1 or add 0 
        console.log(accumulator, currentvalue, searchElement);
        return accumulator + occurences;
    }, 0);
}


//exercise 6 - Get Max
const sss = [4, 1, 2, 3];
const max = getMax(sss);
console.log(max);

function getMax(array) {
   if( array.length === 0)
    return undefined;
    // let s = 0;
    // array.sort();
    // for (let i = 0; i < array.length - 1; i++) {
    //     if (array[i] > array[i + 1]) {
    //         s = array[i];
    //     }
    //     else {
    //         s = array[i + 1];
    //     }
    // } return s;

    //using reducer
    //If no value metnioned for a it takes 1st index value 
    return array.reduce((a,b) => (a > b) ? a : b);
}
 */

//Exercise 7 - Movies 
//sort all movies by rating and descending order
//Print only titles

const movies =[
{title: 'c',year: 2015, rating: 2.5},
{title: 'a',year: 2019, rating: 3},
{title: 'd',year: 2017, rating: 4},
{title: 'b',year: 2016, rating: 3.5},
{title: 'e',year: 2015, rating: 2.5}
];

// const ss = movies.sort((a,b)=>a.rating - b.rating);
// console.log(ss);
// const re = movies.reverse((a,b) => b.rating - a.rating);
// console.log(re);

const titlePrint = movies
    .filter(m => m.rating >= 3)
    .sort((a,b)=> a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(titlePrint);