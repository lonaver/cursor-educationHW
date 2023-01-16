let isButtonPressed = false;
let arrayKeys = document.getElementsByClassName("key");
const colorPushBtn = "rgb(70, 212, 26)";

document.addEventListener("keydown", (e) => {
  let soundDiv;
  if (e.code === "KeyQ") {
    soundDiv = document.getElementById("87");
  } else if (e.code === "KeyW") {
    soundDiv = document.getElementById("81");
  } else if (e.code === "KeyE") {
    soundDiv = document.getElementById("69");
  }

  for (const arrayKey of arrayKeys) {
    arrayKey.getAttribute("style");
    arrayKey.style.backgroundColor = "";
  }
  soundDiv.getAttribute("style");
  soundDiv.style.backgroundColor = colorPushBtn;
  document.getElementById(e.code).play();
});

function pushButton(buttonEvents) {
  for (const buttonEvent of buttonEvents)
    buttonEvent.addEventListener("click", function (event) {
      for (const btn of buttonEvents) {
        btn.getAttribute("style");
        btn.style.backgroundColor = "";
      }

      switch (buttonEvent.id) {
        case "87":
          document.getElementById("KeyQ").play();
          buttonEvent.style.backgroundColor = colorPushBtn;
          break;
        case "81":
          document.getElementById("KeyW").play();
          buttonEvent.style.backgroundColor = colorPushBtn;
          break;
        case "69":
          document.getElementById("KeyE").play();
          buttonEvent.style.backgroundColor = colorPushBtn;
          break;
      }
    });
}
pushButton(arrayKeys);
