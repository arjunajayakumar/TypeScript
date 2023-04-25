"use strict";
// Literal types --> Refering specific strings and numbers in type positions. variables can't have values other than the specified ones
let user;
let userName;
username = "John";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
// Functions that return nothing will be void type
logMsg("Hello!");
console.log(add(2, 3));
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (c, d) {
    return c * d;
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default parameters
const sumAll = (a = 22, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(2, 3, 2));
console.log(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 5));
// rest parameter should be at the last of the function arguments
// Never type --> For functions that explicitly throw errors and for function which has a infinite/endless loop inside
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
