import { max } from "./js/hw1";
import { getSum } from "./js/hw2";
import { getSalary } from "./js/hw3";
import { GetArrayCouple } from "./js/hw4";
import { arrayEvenNumbers, filterEvenNumbers } from "./js/hw5";
import { someStudent, getSubjects } from "./js/hw6";
import { getMyTaxes, ukraine, latvia, litva, wrapperHW7 } from "./js/hw7";
import { Student, BudgetStudent } from "./js/hw8";
import { handleChangeBGC } from "./js/hw9";
import { arrayKeys, pushButton } from "./js/hw10";
import { getRandomChinese } from "./js/hw11";
import newFontGenerator from "./js/hw13";

document.querySelector(
  ".HW1"
).textContent = `HOMEWORK1 TASK1: priceCandle = 15.678; priceLamp = 123.965; priceGlass = 90.2345; Maxprice=${max}`;

document.querySelector(".HW2").textContent = `HOMEWORK2 TASK2: Sum ${getSum()}`;
document.querySelector(
  ".HW3"
).textContent = `HOMEWORK3 TASK3: Salary ${getSalary()}`;

GetArrayCouple();

document.querySelector(
  ".HW5"
).textContent = `HOMEWORK5 Task 5: filtered ${arrayEvenNumbers} odd numbers ${filterEvenNumbers(
  arrayEvenNumbers
)}`;

document.querySelector(
  ".HW6"
).textContent = `HOMEWORK6 Task 1: subjects ${getSubjects(
  someStudent
)} by student ${someStudent.name}`;
//
//For test
const ukraineWrapper = document.createElement("div");
ukraineWrapper.classList.add("cards_item");
ukraineWrapper.textContent = `Task1, ukraine: ${getMyTaxes.call(
  ukraine,
  1789
)}`;
const latviaWrapper = document.createElement("div");
latviaWrapper.classList.add("cards_item");
latviaWrapper.textContent = `Task1, latvia: ${getMyTaxes.call(latvia, 1789)}`;

const litvaWrapper = document.createElement("div");
litvaWrapper.classList.add("cards_item");
litvaWrapper.textContent = `Task1, litva: ${getMyTaxes.call(litva, 1789)}`;

wrapperHW7.append(ukraineWrapper);
wrapperHW7.append(latviaWrapper);
wrapperHW7.append(litvaWrapper);
//
const Stu1 = new Student("univ", 4, "Maz Naz Step");
Stu1.getInfo();
Stu1.marks = 5;
console.log(Stu1.marks);
document.querySelector(
  ".HW8"
).textContent = `HOMEWORK8 : budget student marks ${Stu1.marks} in consol other information`;

handleChangeBGC();

pushButton(arrayKeys);
//
getRandomChinese(5);
document.querySelector(".HW8").textContent = `HOMEWORK11: in console`;

newFontGenerator;
