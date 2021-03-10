/*
- Properties are qualities associated with a data type
- Strings only have one singular property for us to access, that being the length property
*/

let myName = "Brian";
console.log(myName.length);

/*
METHODS
- Methods are tools that help us manipulate data
- .property vs .method()
*/


let myNameIs = "Brian";
console.log(myNameIs.toUpperCase());

let home = "My home is Indianapolis";
console.log(home.includes("a"));

// Challenge: Use google, find MDN documentation for strings, research and use split method to get an array back form this string

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));