export const handleChangeBGC = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let divTotal = document.createElement("div");
    divTotal.className = "wrapper";
    divTotal.innerHTML = "<div></div> ";
    document.body.append(divTotal);
    divTotal.getAttribute("style");
    divTotal.style.cssText = `display: flex;
        flex-wrap: wrap;
        width: 250px;
        height: auto;`;
    for (let i = 1; i <= 25; i++) {
      let colorRed = Math.random() * (255 - 0) + 0;
      let colorGgreen = Math.random() * (255 - 0) + 0;
      let colorBlue = Math.random() * (255 - 0) + 0;
      let divItem = document.createElement("div");
      divItem.className = "item" + i;
      divItem.innerHTML = "<div></div> ";
      divTotal.append(divItem);
      divItem.getAttribute("style");
      divItem.style.cssText = `width: 50px;
        height: 50px;
    background-color: rgb(${colorRed}, ${colorGgreen}, ${colorBlue});`;
    }
    function ChangeBGC() {
      for (let i = 1; i <= 25; i++) {
        let colorRed = Math.random() * (255 - 0) + 0;
        let colorGgreen = Math.random() * (255 - 0) + 0;
        let colorBlue = Math.random() * (255 - 0) + 0;

        document.getElementsByClassName("item" + i)[0].style.backgroundColor =
          "rgb(" + colorRed + ", " + colorGgreen + ", " + colorBlue + ")";
      }
    }
    setInterval(ChangeBGC, 1000);
  });
};
