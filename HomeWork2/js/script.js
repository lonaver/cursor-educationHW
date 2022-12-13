let newNumber = Number(prompt("Enter a number: "));

while (newNumber !== Math.floor(newNumber)) {
  newNumber = Number(prompt("number must be integer: "));
}
let newNumberAn = Number(prompt("Enter another number: "));
while (newNumberAn !== Math.floor(newNumberAn)) {
  newNumberAn = Number(prompt("number 'another' must be integer: "));
}

const needEven = confirm("Does it skip even numbers?");
let sum = 0;
if (newNumber <= newNumberAn) {
  for (let i = newNumber; i <= newNumberAn; i++) {
    if (needEven == true && i % 2 == 0) {
      sum += i;
    } else if (needEven == false && i % 2 !== 0) {
      sum += i;
    }
  }
} else {
  for (let i = newNumberAn; i <= newNumber; i++) {
    if (needEven == true && i % 2 == 0) {
      sum += i;
    } else if (needEven == false && i % 2 !== 0) {
      sum += i;
    }
  }
}
console.log(sum);
