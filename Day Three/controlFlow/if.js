/*
- A falsy value is a value that is considered false when encountered in a boolean context
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN

- This means that when JavaScript is expecting a boolean and it is given one of the values above, it will always evaluate to "falsy"
*/

let isOn = true;

if (isOn) {
    console.log("The light is on");
}

isOn = false;

if (!isOn) {
    console.log("The light is off");
}

let weather = 55;

if (weather < 70) {
    console.log("Wear a jacket");
}