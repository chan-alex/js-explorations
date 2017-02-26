


const arr1 = [
    "1. Lorem ipsum dolor sit amet, diam egestas amet pulvinar ",
    "2. sociis dictumst urna. Id suspendisse mollis, rutrum sit",
    "3. commodo nulla sodales etiam, placerat euismod. Posuere",
    "4. mattis convallis augue in faucibus non, corrupti euismod",
    "5. nulla, sit est, montes sed, tortor feugiat pede lobortis",
    "6. roin venenatis vestibulum."];


//const iter = arr1.values();// For some reason, arr1 does not have .value()
const iter1 = arr1[Symbol.iterator](); // Using [] notation to access object property.

console.log(iter1.next());
console.log(iter1.next());

// Looping from here, just continues advancing the iterator.
console.log(">>>> Entering loop...");
let current = iter1.next();
while( !current.done ) {
    console.log(current);
    current = iter1.next();
}

console.log(">>>> Entering loop (variant)...");
const iter2 = arr1[Symbol.iterator](); // Using [] notation to access object property.

for( let current=iter2.next(); !current.done; current=iter2.next()) {
    console.log(current.value);
}

// The for...of loop is a simpler way of doing the equivalent of the above.
console.log(">>>> Using for...of loop");
for( let l of arr1) {
    console.log(l);
}
