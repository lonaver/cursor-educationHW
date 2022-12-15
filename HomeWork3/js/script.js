//Task1
const numberUser = prompt("Enter number:");
getMaxDigit = (number) => {
  let maxNumber = 0;
  for (i = 0; i < number.length; i++) {
    const numberFromArr = Number(number[i]);
    if (typeof numberFromArr !== "number" || isNaN(numberFromArr)) continue;
    if (maxNumber < numberFromArr) {
      maxNumber = numberFromArr;
    }
  }
  return maxNumber;
};

// Task2
const numberFromUser = prompt("Enter number for pow:");
const NumberForPow = prompt("Enter number pow:");
numberInPow = (numberForPow, NumberPow) => {
  const needNumber = Number(numberForPow);
  const needNumberPow = Number(NumberPow);
  if (
    typeof needNumber !== "number" ||
    isNaN(needNumber) ||
    typeof needNumberPow !== "number" ||
    isNaN(needNumberPow)
  )
    return;
  const IntPow = Math.floor(needNumberPow);
  let result = needNumber;
  for (let i = 1; i < IntPow; i++) {
    result *= needNumber;
  }
  return result;
};

// Task3
const UserName = prompt("Enter name:");
CapitalLitter = (Name) => {
  if (typeof Name !== "string") return;
  const newName = Name.toLowerCase();
  const capLet = newName.charAt(0).toUpperCase();
  const lenString = newName.length;
  const newString = capLet + newName.slice(1, lenString);
  return newString;
};

// Task4
const salaryUser = prompt("Enter salary:");

getSalary = (Salary) => {
  let numberSalary = Number(Salary);
  if (typeof numberSalary !== "number" || isNaN(numberSalary)) return;
  numberSalary -= (numberSalary / 100) * 18 + (numberSalary / 100) * 1.5;
  return numberSalary;
};

// Task5
const minNumber = Number(prompt("Enter a min number: "));
const maxAnNumber = Number(prompt("Enter a max number: "));

randomNumber = (max, min) => {
  if (
    typeof max !== "number" ||
    isNaN(max) ||
    typeof min !== "number" ||
    isNaN(min)
  )
    return;
  const RandomNumber = Math.random();
  return Math.floor((max - min) * RandomNumber + min);
};

// Task6
const wordForChange = prompt("Enter a  word: ");
const letter = prompt("Enter a letter: ");
countLetter = (lettUser, wordChangeUser) => {
  let count = 0;
  const lenString = wordChangeUser.length;

  for (let i = 0; i < lenString; i++) {
    const letI = wordChangeUser[i].toLowerCase();
    if (letI == lettUser.toLowerCase()) count++;
  }
  return count;
};

// Task7
const sumChange = prompt("Enter a sum for change: ");
convertCurrency = (sum) => {
  const rate = 36;
  const SymbolDol = "$";
  const SymbolUAH = "UAH";
  let sumChanged = 0;
  let sumNumber = 0;

  if (sum.includes(SymbolDol) == true) {
    sumNumber = Number(sum.toUpperCase().replace(SymbolDol, "").trim());
    sumChanged = sumNumber * rate;
  } else if (sum.toUpperCase().includes(SymbolUAH) == true) {
    sumNumber = Number(sum.toUpperCase().replace(SymbolUAH, "").trim());
    sumChanged = sumNumber / rate;
  } else {
    console.log("Currency only $ or UAH");
  }
  return sumChanged;
};

// Task8
const lenPassword = Number(prompt("Enter length password: "));
randomPassword = (lengthPassword = 8) => {
  let password = "";
  if (lengthPassword == 0) lengthPassword = 8;
  for (let i = 1; i <= lengthPassword; i++) {
    const RandomNumber = Math.random();
    const numberPassword = Math.floor((9 - 0) * RandomNumber + 0);
    password += String(numberPassword);
  }
  return password;
};

//Task9
const wordForDel = prompt("Enter a word for delete letter: ");
const letterForDel = prompt("Enter a letter: ");
deleteLetter = (letUser, wordDelUser) => {
  const letUserUp = letUser.toUpperCase();
  const letUserLow = letUser.toLowerCase();
  let wordWithoutLetter = wordDelUser;
  wordWithoutLetter = wordDelUser.replaceAll(letUserUp, "").trim();
  wordWithoutLetter = wordDelUser.replaceAll(letUserLow, "").trim();

  return wordWithoutLetter;
};

//Task10
const phrase = prompt("Enter a phrase or a word: ");
isPalyndrom = (needPhrase) => {
  let newString = "";
  const lenString = needPhrase.length - 1;
  for (let i = lenString; i >= 0; i--) {
    newString += needPhrase[i];
  }
  if (needPhrase.toLowerCase() == newString.toLowerCase()) return true;
  return false;
};

//Task11
const word = prompt("Enter a word for delete repeted letter: ");
deleteRepeteLetter = (wordUser) => {
  let lenString = wordUser.length;
  for (let i = lenString - 1; i >= 0; i--) {
    const nedL = wordUser[i];
    let count = 0;
    for (let j = 0; j < lenString; j++) {
      if (wordUser[j] == nedL) {
        count++;
        if (count > 1) break;
      }
    }

    if (count > 1) {
      wordUser = wordUser.replaceAll(wordUser[i], "");
      lenString = wordUser.length;
      i = lenString - 1;
    }
  }
  return wordUser;
};

console.log(`Task1: ${getMaxDigit(numberUser)}
Task2: ${numberInPow(numberFromUser, NumberForPow)}
Task3: ${CapitalLitter(UserName)}
Task4: ${getSalary(salaryUser)}
Task5: ${randomNumber(minNumber, maxAnNumber)}
Task6: ${countLetter(letter, wordForChange)}
Task7: ${convertCurrency(sumChange)}
Task8: ${randomPassword(lenPassword)}
Task9: ${deleteLetter(letterForDel, wordForDel)}
Task10: ${isPalyndrom(phrase)}
Task11: ${deleteRepeteLetter(word)}`);
