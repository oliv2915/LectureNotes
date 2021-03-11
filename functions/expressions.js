// Function expressions are functions stored within variables
// Function expressions do not get hoisted

/*
  (1)
let hey = function hi() {
    console.log("HI");
}

1 - The variable hey is now representative of the function hi()
*/

let hey = function hi() {
    console.log("HI");
}

hey();