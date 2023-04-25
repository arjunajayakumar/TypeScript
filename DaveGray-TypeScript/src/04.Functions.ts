// Type Alias --> Creating Aliases for typescript type
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Keyboardist = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types --> Refering specific strings and numbers in type positions. variables can't have values other than the specified ones
let user: "Dave";

let userName: "Dave" | "John" | "Amy" | 4 | false;
username = "John";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

// Functions that return nothing will be void type
logMsg("Hello!");
console.log(add(2, 3));

let subtract = function (a: number, b: number) {
  return a - b;
};

type mathFunction = (a: number, b: number) => number;

// Above can be written using interface as below

interface calcFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default parameters
const sumAll = (a: number = 22, b: number, c: number = 2) => {
  return a + b + c;
};

console.log(sumAll(2, 3, 2));
console.log(sumAll(undefined, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 5));
// rest parameter should be at the last of the function arguments

// Never type --> For functions that explicitly throw errors and for function which has a infinite/endless loop inside
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
