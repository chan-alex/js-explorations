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

let x3 = 0;
do {
    x3 += 1;
    console.log("x3 = " + x3);
}while (x3 < 10);
