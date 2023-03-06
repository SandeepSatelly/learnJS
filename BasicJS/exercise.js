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