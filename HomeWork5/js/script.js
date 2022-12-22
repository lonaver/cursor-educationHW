//Task 1
const lengthArray = Number(prompt("Task 1: Enter a length array: "));
const minNumber = Number(prompt("Task 1: Enter a min number: "));
const maxNumber = Number(prompt("Task 1: Enter a max number: "));

getRandomArray = (length, min, max) => {
  const arrayRandom = [];
  if (
    typeof max !== "number" ||
    isNaN(max) ||
    typeof min !== "number" ||
    isNaN(min)
  )
    return;
  debugger;
  length = Math.floor(length);

  do {
    arrayRandom.push(Math.floor((max - min) * Math.random() + min));
  } while (arrayRandom.length < length);
  return arrayRandom;
};
console.log(`Task1: ${getRandomArray(lengthArray, minNumber, maxNumber)}`);

// Task 2
const arrayModa = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
// const arrayModaStr = prompt("Task 2: Enter array: ");
// const arrayModa = [1.1, 2, 1.1];
getModa = (arrayModa) => {
  // const arrayModa = arrayModaStr.splice();
  // arrayModa.map((element) => Number(element));

  const arrayCouple = [];
  arrayModa.sort((a, b) => a - b);
  for (let i = 0; i < arrayModa.length; i++) {
    if (!Number.isInteger(arrayModa[i])) continue;
    if (arrayCouple.find((item) => item[0] === arrayModa[i])) {
      continue;
    }
    let newArray = arrayModa.filter((item) => item === arrayModa[i]);
    let lengthArr = newArray.length;
    arrayCouple.push([arrayModa[i], lengthArr]);
  }
  arrayCouple.sort((a, b) => b[1] - a[1]);
  const max = arrayCouple[0][0];
  return max;
};
console.log(`Task2 : ${getModa(arrayModa)}`);

//Task 3
const arrayForAverage = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
// const arrayForAverage = [1.1, 2.2, 1.1];
getAverage = (arrayForAverage) => {
  let avg;
  let sum = 0;
  let count = 0;
  arrayForAverage.forEach((element) => {
    if (Number.isInteger(element) && Number.isInteger(element)) {
      sum += element;
      count++;
    }
  });

  avg = sum / (count || 1);
  return avg;
};
console.log(`Task3: ${getAverage(arrayForAverage)}`);

//getMedian(1, 2, 3, 4) –> 2.5
//Task 4
// const arrayForMedian = [1, 2, 3, 4];
// const arrayForMedian = [1, 2, 3, 4, 5];
const arrayForMedian = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
getMedian = (arrayForMedian) => {
  let median;
  let arraySorted = arrayForMedian
    .sort((a, b) => a - b)
    .filter((element) => (element = Number.isInteger(element)));
  let indexMedian = arraySorted.length / 2;

  if (indexMedian % 2 == 0) {
    median = (arraySorted[indexMedian - 1] + arraySorted[indexMedian]) / 2;
  } else {
    median = arraySorted[Math.round(indexMedian) - 1];
  }
  return median;
};
console.log(`Task4: ${getMedian(arrayForMedian)}`);

//Task 5
const arrayEvenNumbers = [1, 2, 3, 4, 5, 6];
filterEvenNumbers = (arrayEvenNumbers) => {
  return arrayEvenNumbers.filter((element) => element % 2 !== 0);
};
console.log(`Task5: ${filterEvenNumbers(arrayEvenNumbers)}`);

//Task 6
const arrayPositiveNumbers = [1, -2, 3, -4, -5, 6];
countPositiveNumbers = (arrayPositiveNumbers) => {
  return arrayPositiveNumbers.filter((element) => element > 0);
};
console.log(`Task6: ${countPositiveNumbers(arrayPositiveNumbers)}`);

//Task 7
const arrayDividedByFive = [
  6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2,
];
getDividedByFive = (arrayDividedByFive) => {
  return arrayDividedByFive.filter((element) => element % 5 == 0);
};
console.log(`Task7: ${getDividedByFive(arrayDividedByFive)}`);

//Task 8
const stringForChange = prompt("Task 8, Enter a phrase: ");
replaceBadWords = (stringForChange) => {
  const arrayBadWord = ["shit", "fuck"];
  const arrayForChange = stringForChange.split(" ");
  let string = "";
  const newArrayForJoin = arrayForChange.map((item) => {
    for (let badWord of arrayBadWord) {
      if (item.includes(badWord)) {
        return item.replace(badWord, "****");
      }
    }
    return item;
  });
  return newArrayForJoin.join(" ");
};
console.log(`Task8: ${replaceBadWords(stringForChange)}`);

//Task 9
const phraseIntoSyllables = prompt("Task 9, Enter a phrase: ");
divideByThree = (phraseIntoSyllables) => {
  const arrayThreeSyllabels = [];
  const arrayIntoWord = phraseIntoSyllables.split(" ");
  let newItem = "";

  arrayIntoWord.forEach((element) => {
    const arrayIntoSyllables = element.trim().split("");
    arrayIntoSyllables.forEach((item) => {
      if (newItem.length > 2) {
        arrayThreeSyllabels.push(newItem);
        newItem = "";
        newItem += item;
      } else {
        newItem += item;
      }
    });
    if (newItem.length < 3 && newItem.length > 0) {
      arrayThreeSyllabels.push(newItem);
    }
  });
  return arrayThreeSyllabels;
};
console.log(`Task 9: ${divideByThree(phraseIntoSyllables)}`);

//Task 10
const wordForCombo = prompt(
  "Task 10, Enter a word for random combination, max length 10: "
);

generateCombinations = (wordForCombo) => {
  const arrayIntoWord = wordForCombo.split("");

  const newArrayRandom = [];
  if (arrayIntoWord.length > 10) arrayIntoWord.length = 10;
  const copyArray = arrayIntoWord.slice();

  for (let c = 0; c < arrayIntoWord.length * 2; c++) {
    for (let i = arrayIntoWord.length - 1; i >= 0; i--) {
      if (i == 0) {
        j = arrayIntoWord.length - 1;
      } else {
        j = i - 1;
      }

      [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];

      stringArray = copyArray.slice().join("");
      let isAdd = true;
      for (let element of newArrayRandom) {
        for (let m = 0; m < element.length; m++) {
          if (element[m].join("") == stringArray) {
            isAdd = false;
            break;
          }
        }
      }
      if (isAdd == true) {
        newArrayRandom.push([copyArray.slice()]);
      }
    }
  }
  return newArrayRandom;
};
console.log(generateCombinations(wordForCombo));
// console.log(`Task 10: ${generateCombinations(wordForCombo)}`);
