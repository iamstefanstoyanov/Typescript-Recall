class People {
  public name: String;
  public age: number;
  public salary: number;
  public tasks: string[];

  constructor(name: String, age: number) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
  }
  public work(): void {
    this.tasks.map((t) => {
      console.log(this.name + t);
    });
  }
  public collectSalary(): void {
    console.log(`${this.name} received ${this.getSalary()} this month.`);
  }
  public getSalary(): number {
    return this.salary;
  }
}
class Junior extends People {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(' is working on a simple task.');
  }
}
class Senior extends People {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(' is working on a complicated task.');
    this.tasks.push(' is taking time off work.');
    this.tasks.push(' is supervising junior workers.');
  }
}
class Manager extends People{
    public dividend:number
    constructor(name:string,age:number){
        super(name,age);
        this.dividend = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }
    public getSalary(): number {
        return this.salary + this.dividend;
    }
}
