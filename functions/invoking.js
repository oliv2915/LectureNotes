/*
function hi() {
    console.log("HI");
}
 (1)
hi()

1 - This is where we call, or "invoke" our function

Cris Matson = "Writing the function is like a buying a VHS tape, but you can't watch it unless you play()"
*/

function hi() {
    console.log("HI");
}

hi;
hi(); // this is the correct way to invoke a function
console.log(hi);
console.log(hi()); // returns undefined, the function does not return a value

// Create a function that, when invoked, lists out the numbers 1-10

function listNumber() {
    for (let num = 1; num <= 10; num++) {
        console.log(num);
    }
}

listNumber();

// Given the array, create a function that lists out the values individually
let arr = ["This", "is", "really", "cool"]

function listArray() {
    for (item of arr) {
        console.log(item);
    }
}

listArray();