// Problem

// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// Solution-1
let year: HTMLElement | null;
year = document.getElementById("year");
let thisYear: string;
thisYear = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}

// Solution-2
const year1 = document.getElementById("year") as HTMLSpanElement;
const thisYear1 = new Date().getFullYear().toString();
year1.setAttribute("datetime", thisYear);
year1.textContent = thisYear;
