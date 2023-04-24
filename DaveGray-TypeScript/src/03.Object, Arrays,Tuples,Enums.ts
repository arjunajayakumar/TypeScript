// Arrays
let stringArr = ["one", "hey", "Dave"];

let guitars: (string | number)[] = ["Start", "Les Paul", 5150];

let mixedData = ["EVH", 1887, true];

stringArr[0] = "John";
stringArr.push("hey");

let test = [];
let bands: string[] = [];
bands.push("van huseen");

// Tuple --> Strictly follows the types mentioned. an union may/may not have the mentioned data types.
let myTuple: [string, number, boolean] = ["Dave", 145, true];

let mixed = ["John", 1, false];

mixed = myTuple; //This is assignable because mixed is a union type.

// Object
let myObj: object;
myObj = [];
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "Sara";
type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: true,
  albums: [1983, 51422, "OU5154"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: [1987, 21544, "PQWE4TY"],
};

let jimmy: Guitarist = {
  name: "Jimmy",
  active: false,
  albums: ["I", "II", "III"],
};

// evh = jp will work unless it contains all the properties defined in the guitarist type
// evh.years = 40 --> This wont work beacse the new property is not defined in the guitarist type
// Inorder to make a property optional put '?'. eg: let jack = {active?: boolen}. which means active is boolean or undefined
// an interface is same as type but it is used moreover with classes

interface Violinist {
  name: string;
  strings: number;
  active: boolean;
}

const greewtGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`;
  }

  return "Hello!";
  // Same code can be narrowed as below
  //   return `Hello ${guitarist.name?.toUpperCase()}!`;
};

console.log(greewtGuitarist(jp));
// If we are trying to access a optional property and apply methods on it, we need to null check for that optional property

// Enums
// Enums are  ot a type level addition to javascript. it allows to define a set of named constants
enum Grade {
  U,
  D = 1,
  C,
  B,
  A,
}
console.log(Grade.U); //Output: 0
console.log(Grade.D); //Output: 2
