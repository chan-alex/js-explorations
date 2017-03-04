

//let lastlog;

module.exports = function(prefix) {

    return function(log) {

        const now = Date.now();

        console.log(`${prefix} ${now}:   ${log}`); 
    }};
