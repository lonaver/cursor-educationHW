const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Task1
function getMyTaxes(salary) {
  return this.tax * salary;
}
getMyTaxes.call(ukraine, 1789);
//For test
// console.log(`Task1, ukraine: ${getMyTaxes.call(ukraine, 1789)}`);
// console.log(`Task1, latvia: ${getMyTaxes.call(latvia, 1789)}`);
// console.log(`Task1, litva: ${getMyTaxes.call(litva, 1789)}`);

//Task2
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}
getMiddleTaxes.call(ukraine);
//For test
// console.log(`Task2, ukraine: ${getMiddleTaxes.call(ukraine)}`);
// console.log(`Task2, latvia: ${getMiddleTaxes.call(latvia)}`);
// console.log(`Task2, litva: ${getMiddleTaxes.call(litva)}`);

//Task3
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
getTotalTaxes.call(ukraine);
//For test
// console.log(`Task3, ukraine: ${getTotalTaxes.call(ukraine)}`);
// console.log(`Task3, latvia: ${getTotalTaxes.call(latvia)}`);
// console.log(`Task3, litva: ${getTotalTaxes.call(litva)}`);

// //Task4
// function getMySalary() {
//   const max = 2000;
//   const min = 1500;
//   let mySalary = Math.random() * (max - min) + min;
//   const myBalance = {
//     salary: mySalary,
//     taxes: this.tax * mySalary,
//     profit: mySalary - this.tax * mySalary,
//   };
//   console.log(myBalance);
//   setInterval(getMySalary.call(this), 10);
// }
// getMySalary.call(ukraine);
