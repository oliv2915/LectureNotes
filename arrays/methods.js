let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food) {
    // console.log(foodItem);
}

// push() - Adds a new item to the end of the array and returns the length of the new array
food.push("Pizza");
// console.log(`Push: ${food}`);

// splice() - Removes and item starting at index and removes too said index
// returns value items removed
// optionally can replace value at deleted index
food.splice(1, 1,"Banana");
// console.log(`Splice: ${food}`);

// Removes last item from end of the array
// Returns what was removed
food.pop();
// console.log(`Pop: ${food}`);

// Removes first item from the array
// Returns what was removed
food.shift();
// console.log(`Shift: ${food}`);

// Inserts new items at the start of the array
// Returns new length of the array
food.unshift("Popcorn", "Steak");
// console.log(`Unshift: ${food}`);