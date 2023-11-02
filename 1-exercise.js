// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array.

// Pseudocode
// Write the  function filterRange
// Define function with variable + values
// Filter method to creat new array
// Check element
// Print it

let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)

function filterRange(arr, a, b) {
    return arr.filter(function (element) {
        return element >= a && element <= b;
    });
}
console.log(filtered)  // 3,1 (matching values)

console.log(arr)      // 5,3,8,1 (not modified)