//let greet : Function;

//example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
//example 3
let calc: (a: number, b: number, c: string) => number;
calc = (x: number, y: number, c: string) => {
  if (c === 'add') {
    return x + y;
  } else {
    return x - y;
  }
};
//example 3
let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (person: person) => {
  console.log(`${person.name} is ${person.age} years old`);
};
