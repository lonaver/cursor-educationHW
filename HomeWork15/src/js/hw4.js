const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const wrapper = document.querySelector(".wrapper_HW4");
export const GetArrayCouple = () => {
  const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

  const arrayF = [];
  const arrayM = [];
  const arrayLetter = ["а", "я"];
  for (let value of students) {
    let name = value.split("");
    if (arrayLetter.indexOf(name.at(-1), 0) != -1) {
      arrayF.push(value);
    } else {
      arrayM.push(value);
    }
  }
  const arrayResultCouple = [];
  for (let i = 0; i < arrayM.length; i++) {
    arrayResultCouple.push([arrayM[i], arrayF[i]]);
    const personWrapper = document.createElement("div");
    personWrapper.classList.add("cards_item");

    const personName = document.createElement("h3");
    personName.classList.add("person_name");
    personName.textContent = `Get couple from team: ${arrayM[i]}-${arrayF[i]}`;

    personWrapper.append(personName);
    wrapper.append(personWrapper);
  }

  // return arrayResultCouple;
};
