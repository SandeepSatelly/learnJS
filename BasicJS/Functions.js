//Functions  vs Function expression
//When a function is declared for a variable it becomes an expression
//Function declaration
function walk() {
    console.log('walk');
};

//function expression 
const run = function() {
    console.log('walk faster');
};

//Benifits of function declaration - it can be called before initialised 
//where as expression can be used only after it is declared or defined

//^^ This is called Hoisting - where Js engine moves all the functions declared to the top (as hoisted)

//Arguments - if we need a function with varing number of arguments we can use "arguments"

//here because we are using arguments it will take any argument given in the function call
//Then perform the action in the function

function sumTotal() {
    let total = 0;
    for(let value of arguments)
    total +=value;
    console.log(arguments);
    return total;
}

console.log(sumTotal(1,2,3,4,5));

//In the new JS - we can use Rest operator - looks exactly same as spread operator = '...args'
//It takes any number of arguments and puts them in an array
function sumArgs(...args) {
 return args.reduce((a,b)=> a+b);
}
console.log(sumArgs(1,2,3,4,5));

//real time example - final prices after discount for shopping
//REST PARAMETER should always be last in the function
function discountPrice(discount, ...prices) {
    const total = prices.reduce((a,b) => a+b);
    return total * (1-discount/100); //Here we remove the discount from 1 then multiply by the total price
}

console.log(discountPrice(10,20,30,40,50,60));

//default parameters
//NOTE: once you ggive a default value to parameters all following parameters should also get a default value
//If we use default values we don't need to enter at functoin call
//But we can use 'undefined' keyword for any elements without a default value 
function interest(principal, rate = 3.5, years = 6) {
    return principal * rate/100 * years;
}

console.log(interest(10000));
