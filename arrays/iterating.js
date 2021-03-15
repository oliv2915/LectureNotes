let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// regular for loop
for (let i = 0; i < food.length; i++) {
    //  console.log(food[i]);
}

// forEach method CANNOT return a value

// food.forEach(foodItem => console.log(foodItem));

// food.forEach((foodItem, index) => console.log(foodItem, index));

/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

function Movie(title, year) {
    this.title = title,
    this.year = year
}

let movies = [
    new Movie("The Hobbit: An Unexpected Journey", 2012),
    new Movie("The Hobbit: The Battle of the Five Armies", 2014),
    new Movie("The Hobbit: The Deslation of Smaung", 2013)
];
movies.push(new Movie("The Lord of the Rings: The Fellowship",2001));
movies.splice(3, 1, new Movie("The Hobbit", 1977));
movies.forEach(movie => console.log(movie));