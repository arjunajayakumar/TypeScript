"use strict";
// Arrays
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Start", "Les Paul", 5150];
let mixedData = ["EVH", 1887, true];
stringArr[0] = "John";
stringArr.push("hey");
let test = [];
let bands = [];
bands.push("van huseen");
// Tuple --> Strictly follows the types mentioned. an union may/may not have the mentioned data types.
let myTuple = ["Dave", 145, true];
let mixed = ["John", 1, false];
mixed = myTuple; //This is assignable because mixed is a union type.
// Object
let myObj;
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "Sara";
let evh = {
    name: "Eddie",
    active: true,
    albums: [1983, 51422, "OU5154"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: [1987, 21544, "PQWE4TY"],
};
let jimmy = {
    name: "Jimmy",
    active: false,
    albums: ["I", "II", "III"],
};
const greewtGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return "Hello!";
    // Same code can be narrowed as below
    //   return `Hello ${guitarist.name?.toUpperCase()}!`;
};
console.log(greewtGuitarist(jp));
// If we are trying to access a optional property and apply methods on it, we need to null check for that optional property
// Enums
// Enums are  ot a type level addition to javascript. it allows to define a set of named constants
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); //Output: 0
console.log(Grade.D); //Output: 2
