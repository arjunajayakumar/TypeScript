// type assertion/type casting --> sometimes typescript doen't know the type of the value. we need to explicitly add it.

type One = string;
type Two = string | number;
type Three = "hello";

// Covert to more/less specific
let d: One = "hello";
let e = d as Two; //less specific
let f = d as Three; //more specific

let g = <One>"world";
let h = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 3, "concat") as string;

// Here a string is returned instead of number, but TS doesn't know about it. so be careful while adding type assertions!!!!
let nextVal: number = addOrConcat(4, 7, "concat") as number;

// 10 as string --> this is not allowed. if want to make a number to string intentionally make it to unknown
10 as unknown as string; //--> double casting or false casting

// Assertion with DOM
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img") as HTMLImageElement;
// Non null assertion
const imgNnull = document.querySelector("img")!;
img.src;
myImg.src;
imgNnull.src;
