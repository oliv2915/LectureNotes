// 1. Test
let x = 10;
// console.log(x);

// 2. Get element by ID
let testParagraph = document.getElementById("text-paragraph");
testParagraph.style.color = "red";
// console.log(testParagraph);

// 3. Query Selector All and innerText/innerHTML
let sampleClasses = document.querySelectorAll("p.sample-class");
sampleClasses[0].innerText = "My text has changed!";

sampleClasses.forEach(pTag => {
    pTag.innerText = "My text has changed using a forEach() method!"
})

/*
innerText - references or allows us to change the text of a specified element. Will return only visible text in a "node"

textContent - does the same thing as innerText does but will return the full text of a "node"

innerHTML - allows us to text text as well as HTML elements, which will be nested of the current HTML element we are referencing
*/

// 3.5 textContent vs innerText example
// console.log(document.getElementById("span-test").innerText)
// console.log(document.getElementById("span-test").textContent)

// 4 addEventListener - click event
// document.getElementById("click-this-button").addEventListener("click", event => {
//     event.target.style.backgroundColor = "blue";
// })

// Challenge
// - make the button toggle between red and blue when clicked

document.getElementById("click-this-button").addEventListener("click", event => {
    switch (event.target.style.backgroundColor) {
        case "":
            event.target.style.backgroundColor = "blue";
            break;
        case "blue":
            event.target.style.backgroundColor = "red";
            break;
        case "red":
            event.target.style.backgroundColor = "blue";
            break;
        default:
            event.target.style.backgroundColor = "";
            break;
    }
})

// 5. addEventListener - keyup / getElementsByTagName
document.getElementById("name-input").addEventListener("keyup", event => {
    let allPTags = document.getElementsByTagName("p");
    allPTags[0].innerText = "Nothing has been typed.";

    if (event.target.value == "") {
        allPTags[1].innerText = "Nothing has been typed";
    } else {
        allPTags[1].innerText = `Everyone, please say hello to ${event.target.value}`;
    }
})