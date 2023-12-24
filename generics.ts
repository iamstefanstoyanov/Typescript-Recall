const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'Stefan', age: 40 });
//let docTwo = addUID('hello');
console.log(docOne.name);
console.log(docOne.age);

interface Resource<T> {
    uid:number,
    resName:string,
    data: T;
}

const docThree: Resource<object> ={
    uid: 1,
    resName: 'person',
    data: {name:'Stefan'}
}

const docFour: Resource<string[]> ={
    uid:2,
    resName: 'shoppingList',
    data:['milk','bananas','bread']
}