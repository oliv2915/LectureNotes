/*
let hi = () => {
      (1)
    return  "Hi";
}
      (2)      (3)
let newName = hi();

console.log(newName);

1 - The keyword that brings our out of our function
2 - We need a new variable to hold the value of the return
3 - When called, the function becomes the value of the return
*/

let hi = () => {
    return "Hi";
}

let newName = hi();
console.log(newName);


function capitalizeName(name) {
    let capName = "";
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        } 
    }
    return capName;
}

console.log(capitalizeName("Brian"));

/*
    Make a tip calculator using a block body fat arrow function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

let tipCalc = (billTotal, tip) => {
    let tipAmount = billTotal * tip;
    tipAmount = tipAmount.toFixed(2);
    return `Tip Amount: $${tipAmount}`;
}

let tip = tipCalc(15.00, .15);
console.log(tip);