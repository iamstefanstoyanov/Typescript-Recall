var me = {
    name: 'Stefan',
    age: 30,
    speak: function (text) {
        console.log('text');
    },
    spend: function (amount) {
        console.log('I spend', amount);
        return amount;
    },
};
var greetPerson = function (person) {
    console.log('Hello', person.name);
};
greetPerson(me);
