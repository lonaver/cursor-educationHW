function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}
const idGenerator = createIdGenerator();

//Task 2
let sizeFont = 14;
const btnUp = document.querySelector(".btn_up");
const btnNon = document.querySelector(".btn_non");
const btnDown = document.querySelector(".btn_down");
const title = document.querySelector(".title");
const fontGenerator = newFontGenerator();
function* newFontGenerator(size = 14) {
  let valueYield = yield size;
  while (true) {
    if (valueYield === "up") {
      size += 2;
      valueYield = yield size;
    } else if (valueYield === "down") {
      size -= 2;
      valueYield = yield size;
    } else {
      size = size;
      valueYield = yield size;
    }
  }
}

btnUp.addEventListener("click", () => {
  sizeFont = fontGenerator.next().value;
  sizeFont = fontGenerator.next("up").value;
  title.style.fontSize = sizeFont + "px";
  title.textContent = `size font ${sizeFont} px`;
});
btnNon.addEventListener("click", () => {
  sizeFont = fontGenerator.next().value;
  title.style.fontSize = sizeFont + "px";
  title.textContent = `size font did not change ${sizeFont} px`;
});

btnDown.addEventListener("click", () => {
  sizeFont = fontGenerator.next().value;
  sizeFont = fontGenerator.next("down").value;
  title.style.fontSize = sizeFont + "px";
  title.textContent = `size font ${sizeFont} px`;
});
