// ******
// Types
// ******

/*
What is a boolean?
- Are ONLY true or false values
- Booleans are like light switches
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL
- Null is like an empty bucket, it has the capacity to be filled, but it currently is not
*/

let emptyBucket = null;
console.log(emptyBucket);
emptyBucket = "water";
console.log(emptyBucket);

/*
UNDEFINED
- Currently has no value assigned
- Acts as the means (plastic/metal) to create the bucket
*/

let metal; // correct way to assign undefined
// variable
//let metal = undefined; // wrong way, it is redundant
// to initialize if it is not defined

console.log(metal);

//  NULL vs. UNDEFINED
// ********************
// - Null is like an empty bucket, the bucket
// is there, but there's nothing in it.
// - Undefined is like the materials we will use
// to create the bucket

// We can also think of these two variables as pizza boxes
// - null is like the empty pizza box, just waiting for the pizza
// - undefined is like the unassembled box

let emptyBox = null;
let unassembledBox;

/*
NUMBERS
- In JavaScript numbers are literally just numbers
- You can add, subtract, multiply, and divide
- You can use decimals
*/

let degrees = 90;
console.log(degrees);

// will console.log() as 999999999999999
let precise = 999999999999999;
console.log(precise);

// will console.log() as 10000000000000000
let rounded = 9999999999999999;
console.log(rounded);

// will console.log() as 0.30000000000000004
let notQuite = 0.2 + 0.1;
console.log(notQuite);

// Function to convert a string to numbers IF that string is a number
let a = Number("123");
console.log(a);

/*
STRINGS
- A string is any value between a set of quotes or back ticks
- A string can be denoted by '', "", ``
- 'string' === "string" === `string`
*/

let stringOne = "double quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo);

// Numbers vs Strings

// adding numbers
let addition = 1050 + 100
console.log(addition);

// adding strings
let concatenation = "1150" + "100";
console.log(concatenation);

// check data type, use typeof
console.log(typeof addition);
console.log(typeof concatenation);

/*
OBJECTS
- Can be denoted by {}
- Objects store 2 things, a key and a value
- We can access these values by digging into the object with dot notation - object.value
*/

// Say we want to create an app like Spotify
// We want to take in an artists number, amount of albums they have produced, all members are still alive?

let artist = {
    name: "Queen",
    albums: 15,
    allMembersAlive: false
}

console.log(artist);
// example of dot notation
console.log(artist.name);
console.log(artist.allMembersAlive);
console.log(typeof artist);

// how to add to an object
artist.songName = "I want it all"
console.log(artist);

// how to change an object's value
artist.songName = "Bohemian Rhapsody"
console.log(artist);

/*
ARRAYS
- Arrays are denoted by []
- Arrays act as a list
- We access them by the index number array[index]
- Indexes start at 0

let list = [ "item1" , "item2" , "item3" ]
                (0)       (1)       (2)
*/

let burritos = ["large", 4, true]
console.log(burritos);
// console.log() as an object
console.log(typeof burritos);

// ADDITION VS CONCATENATION
// Addition is adding number togehter
// Concatenation is adding strings together

let add = 100 + 100
console.log(add);

let concat = "Brian " + "Oliver II"
console.log(concat);

let stillConcat = "1050" + 100
console.log(stillConcat);

/* CHALLENGE */

let firstName = "Brian"
let lastName = "Oliver II"
let houseNumber = 5936
let aptNumber = "2B"
let street = "Radnor Rd"
let city = "Indianapolis"
let state = "IN"
let zipcode = 46226
// concatenation of strings
console.log(houseNumber + " " + street + ", " + aptNumber + ", " + city + ", " + state + " " + zipcode);
// string interpolation
console.log(`${houseNumber} ${street}, ${aptNumber}, ${city}, ${state} ${zipcode}`);