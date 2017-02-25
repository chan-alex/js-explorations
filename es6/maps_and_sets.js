
// New in es6, maps

// Before es6, objects were used to map keys to values.
// Problems:
//   Because of the prototypal style of OO, there could be be unintended mappings.
//   No easy to know how many mapping are there.
//   Keys must be strings or symbols.
//   No gurantee of order in properties.

// In es6, there is a map object.


const p1 = { name: "jack" };
const p2 = { name: "jim" };
const p3 = { name: "john" };
const p4 = { name: "james" };
const p5 = { name: "henry" };
const p6 = { name: "Tim" };

// Here we want to map the above objects to strings

const team1 = new Map();

team1.set(p1, "wing");
team1.set(p2, "wing");
team1.set(p3, "center");
team1.set(p4, "defense");
team1.set(p5, "defense");

// the set() method is chainable too.

const team2 = new Map();

team2
   .set(p1, "wing")
   .set(p2, "wing")
   .set(p3, "center")
   .set(p4, "defense")
    .set(p5, "defense");

// It is possible to pass in arrays as well.

const team3 = new Map([
    [p1, "wing"],
    [p2, "wing"],
    [p3, "center"],
    [p4, "defense"],
    [p5, "defense"],
]);


// To retrieve, use get()
console.log(`team1.get(p3) returns: ${team1.get(p3)}`);

// Calling get() on a key that does not exist returns undefined.
console.log(`team1.get(p6) returns: ${team1.get(p6)}`);

// has() can be used to determine if a key exists.
console.log(`Does key p1 exist? Ans: ${team1.has(p1)}`);
console.log(`Does key p6 exist? Ans: ${team1.has(p6)}`);

// set() can also be used to replace keys
team1.set(p1,"wingman");
console.log(team1);

// .size returns the size of the map
console.log(`There are ${team1.size} number of keys in team1.`);


// Use keys() to get all the keys
for( let k of team1.keys())
    console.log(k);


// Use valuess() to get all the values
for( let v of team1.values())
    console.log(v);

// entries() returns enteries as array where 1st element is the key
// the 2nd elements is the value.

for(let e of team1.entries())
    console.log(e);

// Can use destructing 
for(let [k,v] of team1.entries())
    console.log(`${k.name} : ${v}`);


// delete() deletes an key

team2.delete(p2);
console.log("Team1:");
console.log(team1);
console.log("Team2:");
console.log(team2);


// To remove all entries, use clear()
console.log("Before clear, Team2:");
console.log(team2);

team2.clear();

console.log("After clear, Team2:");
console.log(team2);


