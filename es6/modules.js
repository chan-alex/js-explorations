

// Importing a local file module.
const module1 = require("./test_module1.js");


console.log(`module1.add1(1) = ${module1.add1(1)}`);
console.log(`module1.add2(1) = ${module1.add2(1)}`);
console.log(`module1.add3(1) = ${module1.add3(1)}`);

console.log(`module1.CONSTANT1 = ${module1.CONSTANT1}`);


// there are 3 type of modules: core, npm, file.
// core modules comes with node
// npm modules.

// npm modules have specific naming conventions.
// For a npm module X, node will look for it in a subdirectory named "node_modules".
// If not found, it will go look for it in the parent directory, and repeats until
// it finds it or it reaches the root.


// Question: is it possible for a module to imported twice?
// Ans: No. Node only imports a module once.



// Common pattern: a module that exports a function that's intended to be called immediately.

const debug = require('debug')('main');


// This will print something if the DEBUG env variable is set. e.g.
// console.log(`module1.add3(1) = ${module1.add3(1)}`);

console.log(`module1.CONSTANT1 = ${module1.CONSTANT1}`);


// there are 3 type of modules: core, npm, file.
// core modules comes with node
// npm modules.

// npm modules have specific naming conventions.
// For a npm module X, node will look for it in a subdirectory named "node_modules".
// If not found, it will go look for it in the parent directory, and repeats until
// it finds it or it reaches the root.


// Question: is it possible for a module to imported twice?
// Ans: No. Node only imports a module once.



// Common pattern: a module that exports a function that's intended to be called immediately.

const debug = require('debug')('main');


// This will print something if the DEBUG env variable is set. e.g.
//  DEBUG=main node modules.js
debug('start');

// An example of it might be implemented.
const log = require("./log_module.js")('test1');
log("test 1 2 3");
