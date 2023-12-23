let greet: Function;
greet = () => {
  console.log('Hello');
};
//greet = 'Hello'

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};
add(5, 5);
//add(5,'5')
add(5, 5, 20);
add(5, 5, '20');

const minus = (a: number, b: number): number => {
  return a + b;
};

let res = minus(7, 10);

//res='asd'
