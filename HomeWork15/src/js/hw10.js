let isButtonPressed = false;
export let arrayKeys = document.getElementsByClassName("key");
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

export function pushButton(buttonEvents) {
  for (const buttonEvent of buttonEvents)
    buttonEvent.addEventListener("click", function (event) {
      for (const btn of buttonEvents) {
        btn.getAttribute("style");
        btn.style.backgroundColor = "";
      }

      switch (buttonEvent.id) {
        case "87":
          const wavFile = document.getElementById("KeyQ");
          wavFile.setAttribute(
            "src",
            require("../sound/mixkit-fish-flapping-2457.wav")
          );
          wavFile.play();
          buttonEvent.style.backgroundColor = colorPushBtn;
          break;
        case "81":
          const wavW = document.getElementById("KeyW");
          wavW.setAttribute(
            "src",
            require("../sound/mixkit-cartoon-monkey-laugh-100.wav")
          );
          wavW.play();

          buttonEvent.style.backgroundColor = colorPushBtn;
          break;
        case "69":
          const wavE = document.getElementById("KeyE");
          wavE.setAttribute(
            "src",
            require("../sound/mixkit-cockatoo-bird-squawk-2437.wav")
          );
          wavE.play();

          buttonEvent.style.backgroundColor = colorPushBtn;
          break;
      }
    });
}
