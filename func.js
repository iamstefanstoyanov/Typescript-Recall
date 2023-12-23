var greet;
greet = function () {
    console.log('Hello');
};
//greet = 'Hello'
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 5);
//add(5,'5')
add(5, 5, 20);
add(5, 5, '20');
var minus = function (a, b) {
    return a + b;
};
var res = minus(7, 10);
//res='asd'
