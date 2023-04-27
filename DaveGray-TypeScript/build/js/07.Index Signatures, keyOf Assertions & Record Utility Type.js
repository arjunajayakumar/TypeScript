"use strict";
// interface TransactionObj {
//   pizza: number;
//   books: number;
//   job: number;
// }
const todaysTransactions = {
    pizza: -50,
    books: -5,
    job: 50,
};
console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);
let prop = "pizza";
// console.log(todaysTransaction[prop]); --> properties cannot be accessed in this way
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const transactionsPerDayObj = {
    pizza: -45,
    books: 35,
    job: 42,
    dave: 47,
};
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// keyof Assertion
// on commenting the index signature and We can use an alternative way as below by using assertion
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// we can use another alternative as below
Object.keys(student).map((key) => {
    console.log(student[key]);
    // we used typeof because incase we don't know the type of student. that's why we referred 'student' instead of 'Student
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 252,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
