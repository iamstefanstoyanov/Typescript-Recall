enum ResType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON}
interface Resource<T> {
  uid: number;
  resType: number;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resType: ResType.BOOK,
  data: { title: 'Name of wind' },
};

const docTwo: Resource<object> = {
  uid: 12,
  resType: ResType.PERSON,
  data: { name: 'Stefan' },
};
console.log(docOne, docTwo)