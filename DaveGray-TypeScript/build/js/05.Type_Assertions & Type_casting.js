"use strict";
// type assertion/type casting --> sometimes typescript doen't know the type of the value. we need to explicitly add it.
// Covert to more/less specific
let d = "hello";
let e = d; //less specific
let f = d; //more specific
let g = "world";
let h = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
// Here a string is returned instead of number, but TS doesn't know about it. so be careful while adding type assertions!!!!
let nextVal = addOrConcat(4, 7, "concat");
// 10 as string --> this is not allowed. if want to make a number to string intentionally make it to unknown
10; //--> double casting or false casting
// Assertion with DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// Non null assertion
const imgNnull = document.querySelector("img");
img.src;
myImg.src;
imgNnull.src;
