//HomeWork1
const priceCandle = 15.678;
const priceLamp = 123.965;
const priceGlass = 90.2345;

const max = Math.max(priceCandle, priceLamp, priceGlass);
document.querySelector(
  ".HW1"
).textContent = `TASK1: priceCandle = 15.678; priceLamp = 123.965; priceGlass = 90.2345; Maxprice=${max}`;

//HomeWork3
const Salary = prompt("HOMEWORK3 Task4, Enter salary:");

getSalary = (Salary) => {
  let numberSalary = Number(Salary);
  if (typeof numberSalary !== "number" || isNaN(numberSalary)) return;
  numberSalary -= (numberSalary / 100) * 18 + (numberSalary / 100) * 1.5;
  return numberSalary;
};

document.querySelector(
  ".HW3"
).textContent = `HOMEWORK3 Task 4: grose wage ${Salary}, minus tax ${getSalary(
  Salary
)}`;

//HomeWork4
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const wrapper = document.querySelector(".wrapper_HW4");
GetArrayCouple = (students) => {
  const arrayF = [];
  const arrayM = [];
  const arrayLetter = ["а", "я"];
  for (let value of students) {
    let name = value.split("");
    if (arrayLetter.indexOf(name.at(-1), 0) != -1) {
      arrayF.push(value);
    } else {
      arrayM.push(value);
    }
  }
  const arrayResultCouple = [];
  for (let i = 0; i < arrayM.length; i++) {
    arrayResultCouple.push([arrayM[i], arrayF[i]]);
    const personWrapper = document.createElement("div");
    personWrapper.classList.add("cards_item");

    const personName = document.createElement("h3");
    personName.classList.add("person_name");
    personName.textContent = `Get couple from team: ${arrayM[i]}-${arrayF[i]}`;

    personWrapper.append(personName);
    wrapper.append(personWrapper);
  }

  // return arrayResultCouple;
};
GetArrayCouple(students);

//HomeWork5
const arrayEvenNumbers = [1, 2, 3, 4, 5, 6];
let filterEvenNumbers = (arrayEvenNumbers) => {
  return arrayEvenNumbers.filter((element) => element % 2 !== 0);
};
document.querySelector(
  ".HW5"
).textContent = `HOMEWORK5 Task 5: filtered ${arrayEvenNumbers} odd numbers ${filterEvenNumbers(
  arrayEvenNumbers
)}`;

//HomeWork6
const studentsHW6 = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
let someStudent = studentsHW6[0];
let getSubjects = (someStudent) => {
  let subjectsForStudents = [];
  let nameSubject = "";
  for (let key in someStudent.subjects) {
    nameSubject = key;
    nameSubject = nameSubject.replace(
      nameSubject[0],
      nameSubject[0].toUpperCase()
    );
    nameSubject = nameSubject.replace("_", " ");
    subjectsForStudents.push(nameSubject);
  }
  return subjectsForStudents;
};
document.querySelector(
  ".HW6"
).textContent = `HOMEWORK6 Task 1: subjects ${getSubjects(
  someStudent
)} by student ${someStudent.name}`;

//HomeWork7
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
const wrapperHW7 = document.querySelector(".wrapper_HW7");

function getMyTaxes(salary) {
  return this.tax * salary;
}
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

// console.log(`Task1, ukraine: ${getMyTaxes.call(ukraine, 1789)}`);
// console.log(`Task1, latvia: ${getMyTaxes.call(latvia, 1789)}`);
// console.log(`Task1, litva: ${getMyTaxes.call(litva, 1789)}`);
