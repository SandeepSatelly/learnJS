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