// interface TransactionObj {
//   pizza: number;
//   books: number;
//   job: number;
// }

// Index signature --> when there is no idea on the keys and values
interface TransactionObj {
  readonly [keys: string]: number;
}
const todaysTransactions: TransactionObj = {
  pizza: -50,
  books: -5,
  job: 50,
};

console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);

let prop: string = "pizza";
// console.log(todaysTransaction[prop]); --> properties cannot be accessed in this way

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todaysNet(todaysTransactions));

// Case -1 --> If we want to add some properties along with index signature
interface transactionsPerDay {
  [keys: string]: number;
  pizza: number;
  books: number;
  job: number;
}

const transactionsPerDayObj: transactionsPerDay = {
  pizza: -45,
  books: 35,
  job: 42,
  dave: 47,
};
// Here we have added dave which is an extra property along with pizza, books and job.

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
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
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// we can use another alternative as below
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
  // we used typeof because incase we don't know the type of student. that's why we referred 'student' instead of 'Student
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

// Record utility type
type Streams = "salary" | "bonus" | "sideHustle";
type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 252,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
