

// Adding and Removing single elements at the beginning and the end.

const arr1 = [1,2,3,4,5];


// push and pop - adds and removes elements at the end.
arr1.push("a");     // return 6
console.log(`After arr1.push(). arr1 = ${arr1}`);

arr1.pop();
console.log(`After arr1.pop(). arr1 = ${arr1}`);



// Shift and unshift work at the beginning.

arr1.unshift("x");
console.log(`After arr1.unshift(). arr1 = ${arr1}`);

arr1.shift();
console.log(`After arr1.shift(). arr1 = ${arr1}`);



// Adding multiple elements at the end
// Note: Does not modify array, returns a copy instead.
console.log(arr1.concat("a", "b", "c"));

console.log(arr1.concat("a", ["b", "c", "d"], "e")); // nested arrays are flattened if provdied directy.


// Slicing - get subarrays from arrays.
// Note: slicing does not modify the array.
const arr2 = [1,2,3,4,5,6,7,8,9,10];

console.log(`arr2.slice(5) = ${arr2.slice(5)}`);    // element 5 and onwards
console.log(`arr2.slice(1,3) = ${arr2.slice(1,3)}`);  // returns 1-3
console.log(`arr2.slice( -3) = ${arr2.slice( -3)}`);  // last 3 elements. 


// Splicing - does in place modifications. Adding or removing elements at any index.
// 1st argument specifies the index to start modifying.
// 2nd argument is the number to remove (use 0 if don't want to remove).
// Remaining arguments are elements to be added.


arr2.splice(2, 0, "a", "b", "c");
console.log(`After arr2.splice(2, 0, "a", "b", "c"),  arr2 = ${arr2}`);


arr2.splice(5, 0, "X");
console.log(`After arr2.splice(5, 0, "X"), arr2 = ${arr2}`);

arr2.splice(5, 1);
console.log(`After arr2.splice(5, 1), arr2 = ${arr2}`);


// Cutting and replacing within an Array
// ES6 introduces a new method, copyWithin, that takes a sequence of array and copies them
// in place to a different part of the array, overwriting the elements there.
// 1st argument is where to copy to (target)
// 2nd argument is where to start copying from.
// 3rd argument is where to stop copying from.
// It is possible to use negative indices.

const arr3 = [1,2,3,4,5];

arr3.copyWithin(1,2);
console.log(`After arr3.copyWithin(1,2), arr3 = ${arr3}`);


// Filling an array with elements
// ES6 bring a new method, fill, that set any number of element with a fixed value
// in place.
// It is possible to use negative indices.

const arr4 = new Array(5).fill("x");
console.log(`arr4 = ${arr4}`);

arr4.fill("y", 1);
console.log(`After arr4.fill("y", 1), arr4 = ${arr4}`);


// Reversing.
// make changes in place.
const arr5 = [1,2,3,4,5];
arr5.reverse();
console.log(`After arr5.reverse(), arr5 = ${arr5}`);


// Sorting
// make changes in place.
const arr6 = [4,5,2,6,1,2,3,76];
arr6.sort();
console.log(`After arr6.sort(), arr6 = ${arr6}`);

// It is possible to specify a sort function.
const arr7 = [ {name:"john", age:20}, {name:"jim", age: 30}, {name:"james", age:15} ];

arr7.sort((a,b) => a.age < b.age);
console.log("After sorting arr7 by age, arr7 is: ");
console.log(arr7);

arr7.sort((a,b) => a.name < b.name);
console.log("After sorting arr7 by name, arr7 is: ");
console.log(arr7);

