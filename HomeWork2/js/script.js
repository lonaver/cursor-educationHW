let newNumber;
let newNumberAn;
do {
  do {
    newNumber = Number(prompt("min number must be integer and positive: "));
  } while (newNumber < 0 && newNumber !== Math.floor(newNumber));
  do {
    newNumberAn = Number(prompt("max number must be integer and positive: "));
  } while (newNumberAn !== Math.floor(newNumberAn) && newNumberAn < 0);
} while (newNumber > newNumberAn);
const needEven = confirm("Does it skip even numbers?");
let sum = 0;
// debugger;
for (let i = newNumber; i <= newNumberAn; i++) {
  if (needEven == true && i % 2 !== 0) {
    sum += i;
  } else if (needEven == false) {
    sum += i;
  }
}
console.log(`Sum ${sum}`);
