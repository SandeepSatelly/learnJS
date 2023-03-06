//Create address object & create funtion to show address

 

function showAddress(address) {
    for(let key in address)
    console.log(key, address[key]);
 }

 function addressUsingFunctional(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
 }

 showAddress(new AddressUsingConstructor('1st', 'using constructor', 12345));
 showAddress(addressUsingFunctional('2nd', 'using functional', 32415));
  
 function AddressUsingConstructor(street, city, zipCode){
    this.street = street, 
    this.city = city,
    this.zipCode = zipCode
 };
let address1 = new AddressUsingConstructor('a', 'b', 'c');
let address2 = new AddressUsingConstructor('a', 'b', 'c');

function areEqual(address1, address2) {
 return address1.street === address2.street &&
 address1.city === address2.city &&
 address1.zipCode === address2.zipCode;
}

console.log(areEqual(address1, address2));


function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areSame(address1, address2));

function BlogPostConstructor(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views= 12345,
    this.comments = [{
        author:"by someone",
        body:"something written"
    }],
    this.isLive = true
}

console.log(new BlogPostConstructor('something else', 'writing as needed', 'me'));

//Create price range object
let priceRanges = [
    {label: '$', toolTip: 'Inexpensive', minPerPerson:0, maxPerPerson:10},
    {label: '$$', toolTip: 'Moderate', minPerPerson:11, maxPerPerson:20},
    {label: '$$$', toolTip: 'Expensive', minPerPerson:21, maxPerPerson:50}
];

console.log(priceRanges.length);