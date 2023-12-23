//let greet : Function;
//example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
//example 3
var calc;
calc = function (x, y, c) {
    if (c === 'add') {
        return x + y;
    }
    else {
        return x - y;
    }
};
//example 3
var logDetails;
logDetails = function (person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old"));
};
