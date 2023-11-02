// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// Pseudocode:
// Creat objects to store info
// An array for those objects
// Variable to call users
// Add map using function to extract extract the names
// Print it

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [john, pete, mary]

let names = users.map(person => person.name)

console.log(names) // John, Pete, Mary