/*
- first pass: stores our variable/function declartions, but does not assign values. Anything that needs hoisted is hoisted here.
- second pass: assigns the values to our variables and executes any hoisted source code.
*/

// let is not hoisted, var is hoisted but returns undefined
// always initialize variables before using them
// console.log(myName);
//let myName = "Brian";


b();

function b() {
    console.log("I have been hoisted");
}