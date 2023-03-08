showNumbers(20);
function showNumbers(limit){
// let s = Array.apply(null, Array(limit+1)).map(function (x, i) { return i; })
// for(let i of s)
// if(i%2===0)
//     console.log(s[i] + " \"EVEN\"");
// else
//   console.log(s[i]+ " \"ODD\"");

for(let i=0; i<=limit; i++){
    const message = (i%2===0)? '"EVEN"' : '"ODD"';
    console.log(i, message);
}
    
} 

function countTruthy(array){
    let t = 0;
   for(let i of array)
    if(i)
    t+=1;
    return  (t);
}

const s = [0,10,0,NaN,2,3,4,0];
console.log(countTruthy(s));


const movie = {
    title: 'a',
    releaseYear: 2023,
    rating: 8.0,
    director:'b'
};
showProperties(movie);
function showProperties(obj) {
for (let key in obj) {
//if(typeof obj[key] === 'string')
//console.log(key, obj[key], typeof obj[key]); 
typeof obj[key] === 'string'? 
    console.log(key, obj[key]): 
    console.log("Value is %s", typeof obj[key]);
}
}


console.log(sum(10));

function sum(limit) {
    let s = 0;
    let t=[];

    for(let i=0; i<=limit; i++)
        if((i%3===0) ||(i%5===0) ){
            s+=i;
            t.push(i);
        }
    console.log(t);
   return s;
}

const marks = [80,80,50,10];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    console.log(calcAvg(marks));
    const average = calcAvg(marks);

    if(average < 60) return ("F");
    if(average < 70) return ("D");
    if(average < 80) return ("C");
    if(average< 90) return ("B");
    return ("A");
}
function calcAvg(array) {
    let sum = 0;
    for(let value of array)
        sum+=value;
    return sum/array.length;
}

showStars(10);
showInvertedStart(10);


function showStars(rows) {
    let pattern = '';
    
    for(let i = 0; i<rows;i++){
       pattern+="*";
        console.log(pattern);
    }
}

function showInvertedStart(stars){
    for (let row = 1; row <= stars; row++)
    {            
        let pattern = '';            
    for (let j = stars; j >= row; j-- ){
     pattern += '*';           
    }           
    console.log(pattern); 
    }
}

showPrime(16);

function showPrime(limit) {
    for (let number = 2; number <= limit; number++)
      if (isPrime(number))
      console.log(number);
}

function isPrime (number) {
    for(let factor = 2; factor < number; factor++)
    if(number%factor === 0){
        return false; // because we are using return statement when it chekcs with 2 and is divisible it quits and returns false
    }  
    return true;
}





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




//Exercise - 1
//Sum of arguments

function sumArg(...args) {
    return args
    .flat(arguments.length)
    .reduce((a,b)=>a+b);
}

console.log(sumArg([1,3,[1,2]],5,2,[1,2,3,4,5]));


//Exercise - 2 Create circle object

const cirObj = {
    radius: 2,
    get area() {
        return Math.round(
            Math.pow(this.radius,2)*
            Math.PI*100
        )/100;
    },
    set (r){
       this.radius=r;    
    }
};

console.log(cirObj.area);

cirObj.set(3);
console.log(cirObj.area);