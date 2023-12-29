class Melon {
  public weight: number;
  public sort: string;
  constructor(weight: number, sort: string) {
    this.weight = weight;
    this.sort = sort;
  }
}
class Watermelon extends Melon {
  constructor(weight: number, sort: string) {
    super(weight, sort);
  }
  get elementIndex(): number {
    return this.weight * this.sort.length;
  }
  toString(): void {
    console.log('Element: Water');
    console.log('Sort: ' + this.sort);
    console.log('Element Index: ' + this.elementIndex);
  }
}
class Firemelon extends Melon {
  constructor(weight: number, sort: string) {
    super(weight, sort);
  }
  get elementIndex(): number {
    return this.weight * this.sort.length;
  }
  toString(): void {
    console.log('Element: Fire');
    console.log('Sort: ' + this.sort);
    console.log('Element Index: ' + this.elementIndex);
  }
}
class Earthmelon extends Melon {
  constructor(weight: number, sort: string) {
    super(weight, sort);
  }
  get elementIndex(): number {
    return this.weight * this.sort.length;
  }
  toString(): void {
    console.log('Element: Earth');
    console.log('Sort: ' + this.sort);
    console.log('Element Index: ' + this.elementIndex);
  }
}
class Airmelon extends Melon {
  constructor(weight: number, sort: string) {
    super(weight, sort);
  }
  get elementIndex(): number {
    return this.weight * this.sort.length;
  }
  toString(): void {
    console.log('Element: Air');
    console.log('Sort: ' + this.sort);
    console.log('Element Index: ' + this.elementIndex);
  }
}
let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let firemelon : Firemelon = new Firemelon(4, "Small");
console.log(firemelon.toString());
let earthmelon : Earthmelon = new Earthmelon(15, "XL");
console.log(earthmelon.toString());
let airmelon : Airmelon = new Airmelon(20, "XLLLL");
console.log(airmelon.toString());
