async function go(needLength) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let newDate = "" + Date.now();
      const newString = newDate.slice(-needLength);

      resolve(String.fromCharCode(newString));
    }),
      50 * needLength;
  });
}
async function getRandomChinese(length) {
  let changedString = "";
  for (i = 0; i < length; i++) {
    changedString += await go(length);
  }

  console.log(changedString);
}
getRandomChinese(5);
