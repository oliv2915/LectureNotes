/*
- Constructor functions can be thought of as a reusable skeleton object
- We can add to the constructor function the same way we add to objects (dot notation)
- It is good practice to capitalize your constructor functions
*/

// Option 1
// an object can be created using explicit declaration by assigned an object to a variable
// this can be a pain if you need to create more than one object with the same keys and different values
let artist1 = {
    name: "Queen",
    album: 16,
    allMembersAlive: false
}
console.log(artist1);

let artist2 = {
    name: "Fleetwood Mac",
    album: 18,
    allMembersAlive: false
}
console.log(artist2);

let artist3 = {
    name: "Stevie Wonder",
    album: 11,
    allMembersAlive: true
}
console.log(artist3);
// Option 2
// How to create a constructor function
function Artist(name, albums, allMembersAlive) {
    this.name = name;
    this.albums = albums;
    this.allMembersAlive = allMembersAlive;
}

let artist4 = new Artist("Lizzo", 3, true);
console.log(artist4);

function Car(make, model, year, miles, hasBeenCrashed) {
    this.make = make;
    this.model = year;
    this.miles = miles;
    this.hasBeenCrashed = hasBeenCrashed;
}

let truck = new Car("Ford", "F150", 1965, 120000, false)
console.log(truck);