var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'Stefan', age: 40 });
//let docTwo = addUID('hello');
console.log(docOne.name);
console.log(docOne.age);
var docThree = {
    uid: 1,
    resName: 'person',
    data: { name: 'Stefan' }
};
var docFour = {
    uid: 2,
    resName: 'shoppingList',
    data: ['milk', 'bananas', 'bread']
};
