

// Adding and Removing single elements at the beginning and the end.

const arr1 = [1,2,3,4,5];


// push and pop - adds and removes elements at the end.
arr1.push("a");     // return 6
console.log(arr1);

arr1.pop(); 
console.log(arr1);


// Shift and unshift work at the beginning.

arr1.unshift("x");
console.log(arr1);

arr1.shift();
console.log(arr1);


// Adding multiple elements at the end
// Note: Does not modify array, returns a copy instead.
console.log(arr1.concat("a", "b", "c"));

console.log(arr1.concat("a", ["b", "c", "d"], "e")); // nested arrays are flattened if provdied directy.


// Slicing
// Note: slicing does not modify the array.
const arr2 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr2.slice(5));    // element 5 and onwards
console.log(arr2.slice(1,3));  // returns 1-3
console.log(arr2.slice( -3));  // last 3 elements. 


