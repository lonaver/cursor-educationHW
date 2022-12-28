const students = [
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
let someStudent = students[0];
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
console.log(getSubjects(someStudent));

//Task 2
let getAverage = (arrayForStart = []) => {
  let avg;
  let sum = 0;
  let count = 0;
  const arrayForAverage = [];
  arrayForStart.forEach((element) => {
    if (Number(element)) arrayForAverage.push(Number(element));
  });

  arrayForAverage.forEach((element) => {
    sum += element;
    count++;
  });

  avg = sum / (count || 1);
  return avg.toFixed(2);
};

let getAverageMark = (someStudent) => {
  const arrayValues = Object.values(someStudent.subjects);
  const arrayValuesNew = arrayValues.reduce(
    (arrayValuesNew, val) => arrayValuesNew.concat(val),
    []
  );

  return getAverage(arrayValuesNew);
};

console.log(getAverageMark(someStudent));

//Task 3
let getStudentInfo = (someStudent) => {
  const infoAboutStudent = {
    name: someStudent.name,
    course: someStudent.course,
    averageMark: getAverageMark(someStudent),
  };
  return infoAboutStudent;
};
console.log(getStudentInfo(someStudent));
//Task4
let getStudentsNames = (students) => {
  const arrayNames = [];
  students.forEach((element) => {
    arrayNames.push(element.name);
  });
  return arrayNames.sort();
};
console.log(getStudentsNames(students));

//Task 5
let getBestStudent = (students) => {
  let bestStudent = "";
  let maxMark = 0;
  students.forEach((someStudent) => {
    let currentMark = getAverageMark(someStudent);
    // console.log(maxMark + ", " + currentMark);
    if (maxMark < currentMark) {
      maxMark = currentMark;
      bestStudent = someStudent.name;
    }
  });
  return bestStudent;
};
console.log(getBestStudent(students));

//Task 6
let calculateWordLetters = (wordTest = "тест") => {
  let wordObject = {};
  //   let count = 0;
  const arrayWord = wordTest.split("");
  for (let element of arrayWord) {
    if (element in wordObject) continue;
    wordObject[element] = arrayWord.filter((item) => item == element).length;
  }
  return wordObject;
};
console.log(calculateWordLetters());
