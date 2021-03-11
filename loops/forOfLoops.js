/*
- For of loops and for in loops both do the same thing which is loop over data structures. There is one key difference, what they iterate over.
    - for in loops iterate over the enumerable properties in an object
        - best used on objects
    - for of loops iterate over the values of an iterable object
        - WILL NOT work on objects without indicies
        - best used on arrays
*/

let catArray = ["Tabby", "British Shorthair", "Burmese", "Maine Coon", "Rag Doll"];

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let cat of catArray) {
    console.log(cat);
}