

const fs = require("fs");


//fs.writeFile() is used to create file.

fs.writeFile("/tmp/hello1.txt", "Hello there! \n", function(err) {
    if(err) return console.log("Error writing to file!");
});



//fs.readFile() is used to read files.

// The 1st try won't display expected output. Need to sepecify encoding.
let fn1 = "/etc/hosts"
fs.readFile(fn1, function(err, data) {

    if (err) return console.log(`Not able to read ${fn1}`);

    console.log(`(1st try) The contents of ${fn1} is: \n`);
    console.log(data); // However does not display expected output.
});


// console.log("----\n");  <-- this won't work. fs.readFile() is asynchronous.

// Specifying utf8 encoding.
fs.readFile(fn1, {encoding: "utf8"}, function(err, data) {

    if (err) return console.log(`Not able to read ${fn1}`);

    console.log(`\n(2nd try) The contents of ${fn1} is: \n`);
    console.log(data); // However does not display expected output.
});

// The above functions are asynchronous/
// All functions in fs have synchronous equivalents.
// The names end in "Sync".
// When using these, error handling is done through exceptions.

// Notice the 3rd try will output before try 1 and try 2.
try {
    console.log(`\n(3rd try) The contents of ${fn1} is: \n`);

    let data = fs.readFileSync(fn1, {encoding: "utf8"});

    console.log(data);

} catch(err) {

    console.log(`Could not read ${fn1}`);

}
