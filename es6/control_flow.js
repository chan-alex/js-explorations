console.log("Start");

//While loop

let x1 = 0;
while(x1 < 5) {
    x1 = x1 + 1;
    console.log("x1 is now " + x1);
}

let x2 = 0;
while(x2 < 10)
    x2 = x2 + 1;
console.log("x2 is now " + x2);


// if ... else ...
if (x2 < 20) {
    console.log("x2 is less than 20");
} else {
    console.log("x2 is greater or equal to 20");
}


// do... while loop
let x3 = 0;
do {
    x3 += 1;
    console.log("x3 = " + x3);
}while (x3 < 10);


// for loop.
for (let i=0; i < 10; i ++) {
    console.log("Inside for loop: i = " + i);
}

for (let a=0, b=10, c=20; a < 10; a +=1, b+=2, c+=1) {
    console.log(`Inside 2nd for loop: a=${a}  b=${b}  c=${c}`);
}


// The following alter control flow. Similar to C:
// break, continue, return, throw


// Switch
console.log("Do switch test now");
for (let i=0; i < 10; i ++) {

    switch(i) {

    case 4:
        console.log(" Switch case: i = 4 now");
        break;
        
    case 6:    
    case 7:
        console.log(" Switch case: i = 6 or 7 now");
        break;
        
    case 9:
        console.log(" Switch case: i = 9 now");
        break;
    }
        
}

// for...in loop
// This type of loop is for looping over the enumerable properties of an object in an
// arbitary order. This is unlike the for...in loop in other languages.
// You can use it to loop over an collection like an array but the looping may be out of
// order.
const obj1 = {x:1, y:2, z:3};

for (let property in obj1) {
    console.log(`In for...in loop: property ${property} of obj1 is ${obj1[property]}`);
}



// for...of
// This type of loop is for looping over elements in a collection
// This loop is similar to for...in other languages.
const a1 = [1,2,3,4,5];
for (let x of a1) {
    console.log("In for...of loop: x is " + x);
}
