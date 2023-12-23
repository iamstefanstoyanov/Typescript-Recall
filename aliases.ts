type StringOrNum = string | number;

type ObjWithName = { name: string; value: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};
const greet = (user: ObjWithName) => {
  console.log(`${user.name} says Hello`);
};
const greet2 = (user: ObjWithName) => {
  console.log(`${user.name} says Hello`);
};
