// If Else Statements
let weather = 55;

if (weather < 70) {
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary!");
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = "Brian";

if (myName === "Brian") {
    console.log(`Hello, my name is ${myName}!`);
} else {
    console.log(`Hello, is your name ${myName}?`);
}

/*
Use this string: let name = 'zAchARy';
​
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let friendName = 'zAchARy';
// Bronze
if (friendName.charAt(0) === friendName.charAt(0).toUpperCase()) {
    console.log(friendName);
} else {
    console.log("Hey, this is written correctly");
}
// Silver
if (friendName.charAt(0) === friendName.charAt(0).toLocaleUpperCase()) {
    console.log(friendName.charAt(0));
} else {
    console.log(friendName.substr(1).toLowerCase());
}
// Gold
if (friendName.charAt(0) === friendName.charAt(0).toUpperCase()) {
    console.log(`${friendName.charAt(0).toUpperCase()}${friendName.substring(1, friendName.length).toLowerCase()}`);
} else {
    console.log(`${friendName.charAt(0).toUpperCase()}${friendName.substring(1, friendName.length).toLowerCase()}`);
}

// Else If Statements
/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 17;

if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you're too young to do anything");
}