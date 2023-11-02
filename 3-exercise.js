// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. 

// Pseudocode:
// Creat objects to store info
// An array for those objects
// Creat a function to get the age average
// If condition
// Sum and average 
// Print it

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [john, pete, mary]

function getAverageAge(users) {
    if (users.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let user of users) {
        sum += user.age;
    }

    return sum / users.length;
}

console.log(getAverageAge(arr))   // (25 + 30 + 29) / 3 = 28