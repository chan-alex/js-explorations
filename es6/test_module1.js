
// This is file module for testing.

function add1(x) {

    return x + 1;

}


function add2(x) {

    return x + 2;;

}

const CONSTANT1 = 1.4343


// module is a special node object for modules
// whatever you assign to it's exports property will be what is exported.
module.exports = { add1,
                   add2,
                   add3(x) {
                       return x + 3;
                   },
                   CONSTANT1
                 };
