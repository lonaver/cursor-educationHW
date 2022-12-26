const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
//formation of teams: boy and girl
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
  }
  return arrayResultCouple;
};
const arrayCommand = GetArrayCouple(students);

//get topic for team
GetTopic = (arrayCommand, themes) => {
  const ArrayCommandTheme = [];
  for (let i = 0; i < arrayCommand.length; i++) {
    let stringCommand = arrayCommand[i][0] + " і " + arrayCommand[i][1];
    ArrayCommandTheme.push([stringCommand, themes[i]]);
  }
  return ArrayCommandTheme;
};
const arrayCommandWithTheme = GetTopic(arrayCommand, themes);

//get mark for student
MarksForStudents = (students, marks) => {
  const arrayMarkStu = [];
  for (let i = 0; i < students.length; i++) {
    arrayMarkStu.push([students[i], marks[i]]);
  }
  return arrayMarkStu;
};
const arrayMarkForStudednts = MarksForStudents(students, marks);

//get randon mark for student within 1-5 range
GetMarksCommand = (arrayCommandWithTheme) => {
  const copyArray = JSON.parse(JSON.stringify(arrayCommandWithTheme));
  const max = 5;
  const min = 1;
  debugger;
  for (let i = 0; i < copyArray.length; i++) {
    let randomNumber = Math.random();
    let randomMark = Math.floor((max - min) * randomNumber + min);
    copyArray[i].push(randomMark);
  }
  return copyArray;
};
const arrayCommandMark = GetMarksCommand(arrayCommandWithTheme);

console.log(arrayCommand);
console.log(arrayCommandWithTheme);
console.log(arrayMarkForStudednts);
console.log(arrayCommandMark);
