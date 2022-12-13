const priceCandle = 15.678;
const priceLamp = 123.965;
const priceGlass = 90.2345;

const max = Math.max(priceCandle, priceLamp, priceGlass);
const min = Math.min(priceCandle, priceLamp, priceGlass);
const sum = priceCandle + priceLamp + priceGlass;

const sumInt =
  Math.floor(priceCandle) + Math.floor(priceLamp) + Math.floor(priceGlass);
const sumIntCeil = Math.ceil(sumInt / 100) * 100;

const sumIntRound = Math.ceil(sumInt / 100) * 100;

const boolEvenNumber = false;
if (sumIntRound % 2 == 0) {
  const boolEvenNumber = true;
}

const remainder = 500 - sumInt;

const avg = sum / 3;

const discountRandom = Math.floor(Math.random() * 100);
const toPay = sum - (sum / 100) * discountRandom;

const cost = sum / 2;
const profit = cost - toPay;

console.log(
  `Max: ${max}
  Min: ${min}
  The amount: ${sum}
  The amount of integers: ${sumInt}
  The amount is rounded 100 : ${sumIntCeil}
  The amount is rounded even: ${boolEvenNumber}
  Remainder 500 - ${sumInt}: ${remainder}
  Average: ${avg.toFixed(2)}
  Discount Random: ${discountRandom}%
  To pay with discount: ${toPay.toFixed(2)}
  cost: ${cost.toFixed(2)} profit: ${profit.toFixed(2)}`
);
