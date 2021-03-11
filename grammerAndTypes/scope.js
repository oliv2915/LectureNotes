/*
- Scope is how a computer keeps tracak of all the variables in a program
- Scopes can also be nested, where there is an outer scope (think global scope) that encloses an innter scope (think local scope)
    - Think about global scope as Planet Earth. Everything belongs to or on Earth itself. We live in Indianapolis, which could be considered our local scope.
*/

let y = 12; // variable is global

function scope() {
    let y = 33; // variable is local to the function
    console.log(`local: ${y}`);
}

scope();
console.log(`global: ${y}`);

/*
- With the introduction of ES6 came two more keywords to declare variables: const and let
    - const is a constant that cannot be changed
    - var and let seem to operate the same. But they do have the same functionality, they behave a little differently.
        - let is scoped to the nearest ENCLOSING block, where var is scoped to the nearest FUNCTION block
*/

var x = 12;

function varTest() {
    var x = 33;
    if (true) {
        var x = 45; // scope is local to the function so it changes x from 33 to 45
        console.log(`If Block: ${x}`);
    }
    console.log(`Function Block: ${x}`);
}

varTest();
console.log(`Global: ${x}`);