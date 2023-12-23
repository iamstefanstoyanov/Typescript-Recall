const character = 'mario';

console.log(character);

let character2 = 'mario';
let age1 = 30;
let isBlackBelt = false;

// character = 20;
character2 = 'luigi';

// age = 'yoshi';
age1 = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(area('hello'));
console.log(circ(7.5));

// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3);
// names[1] = 3;

let numbers = [10, 20, 12, 15];

numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects
let person = {
  name: 'mario',
  belt: 'black',
  age: 30,
};

person.age = 40;
person.name = 'ivan';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']

person = {
  name: 'george',
  belt: 'orange',
  age: 40,
  // skills: ['running'],
};

let character3: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let arr: string[] = [];

arr.push('stefan');

//union types
let mixed2: (string | number)[] = [];
mixed2.push('hello');
mixed2.push(20);
//mixed2.push(false)

let uid: string | number;

uid = '123';
uid = 123;
//uid = false

//objects

let personOne: object;

personOne = { name: 'Stefan', age: 30 };

let personTwo: {
  name2: string;
  age: number;
  belt: string;
};

personTwo = { name2: 'string', age: 20, belt: 'string' };


let age3:any = 25;

age3 = 'stefan'
age3 = true
age3 = 30
age3 = []
age3 = {}

let mixed3: any[]=[];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);

let person2: { name: any, age: any };

person2 = { name: 'yoshi', age: 25 };
console.log(person2);

person2 = { name: 25, age: 'yoshi' };
console.log(person2);