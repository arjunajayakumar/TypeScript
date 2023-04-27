class Coder {
  // We can remove this by adding visibility modifiers in the constructor(eg: public, readonly etc..)
  //   name: string;
  //   music: string;
  //   age: number;
  //   lang: string;
  constructor(
    // Visibility modifiers --> Public means the variable is accessible to public
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript" // Private vs Protected --> Private can be accessed inside the classes only. Protected can be accessed inside extended class.
  ) {
    (this.name = name),
      (this.music = music),
      (this.age = age),
      (this.lang = lang);
  }

  public getAge() {
    return `Hello, I,m ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang} using my ${this.computer}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age);  --> Cannot be accessed as it is private.
// console.log(Sara.lang); --> Cannot be accessed as it is protected, but accessible inside the extended class 'WebDev'.

// Defining interfaces
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Drummer implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Drummer("Jimmy", "guitar");
console.log(Page.play("strums"));

// Static keyword
class Peeps {
  // Static keyword defines a static method/field for the class. it cannot be directly accessed on instances of class, instead it can be accessed on class itself.
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("John");
const steve = new Peeps("Steve");

console.log(john.id);
console.log(steve.id);
console.log(Peeps.getCount());

// Getters and setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["neil", "louis", "ban", "rock"];
MyBands.data = [...MyBands.data, "ZZ TOP", "shadow"];
// MyBands.data = ["Van huelel", 5454]; --> This will throw an error
console.log(MyBands.data);
