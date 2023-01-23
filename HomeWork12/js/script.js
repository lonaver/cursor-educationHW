const wrapper = document.querySelector(".wrapper_person");
const buttonInfo = document.querySelector(".btn_info");
const buttonInfoEpisode = document.querySelector(".btn_info_episode");
const buttonWuki = document.querySelector(".btn_wookie");

const inputEpisode = document.querySelector("#input_episode");
const hero = document.querySelector(".hero");

//planets
const buttonPlanets = document.querySelector(".btn_planets");
// const queryPlanets = "/planets";
//*planets

const BASE_URL = "https://swapi.dev/api/";
const queryFilms = "films/";
const episodes = [4, 5, 6, 1, 2, 3, 7, 8, 9];
let isWookie = false;

document.addEventListener("DOMContentLoaded", () => {
  buttonWuki.textContent = isWookie ? "Woo" : "Eng";
});

function RenderPerson(people) {
  const divCards = document.querySelectorAll(".cards_item");

  for (let divCard of divCards) {
    if (divCard) divCard.remove();
  }

  for (const person of people) {
    let name = "";
    let birth_year = "";
    let gender = "";
    if (isWookie) {
      name = person.whrascwo;
      birth_year = person.rhahrcaoac_roworarc;
      gender = person.acraahrc_oaooanoorc;
    } else {
      name = person.name;
      birth_year = person.birth_year;
      gender = person.gender;
    }

    const personWrapper = document.createElement("div");
    personWrapper.classList.add("cards_item");

    const personName = document.createElement("h3");
    personName.classList.add("person_name");
    personName.textContent = name;

    const personBirth = document.createElement("p");
    personBirth.classList.add("person_birth");
    personBirth.textContent =
      (isWookie ? "rhahrcaoac roworarc: " : "Birth year: ") + birth_year;

    const personGender = document.createElement("p");
    personGender.classList.add("person_gender");
    personGender.textContent =
      (isWookie ? "acraahrc_oaooanoorc: " : "gender: ") + gender;
    //Не бачить svg
    // const svgElem = document.createElementNS("./image/man.svg", "svg");
    // svgElem.classList.add("socials_icon");
    // svgElem.setAttributeNS(null, "width", "32");
    // svgElem.setAttributeNS(null, "height", "32");
    // svgElem.setAttributeNS(null, "viewBox", "0 0 32 32");
    // const useElem = document.createElementNS("./image/man.svg", "use");
    // useElem.setAttributeNS(null, "href", "./image/man.svg");

    // svgElem.append(useElem);

    personWrapper.append(personName);
    personWrapper.append(personBirth);
    personWrapper.append(personGender);
    // personWrapper.append(svgElem);

    wrapper.append(personWrapper);
  }
  hero.classList.add("hero_bcg");
}

async function getFilms(numEpisode) {
  const wookieeStr = isWookie ? "?format=wookiee" : "";
  const request = await fetch(`${BASE_URL}${queryFilms}${numEpisode}`);
  const films = await request.json();
  const arrayPeople = [];

  console.log({ films });

  for (const characterURL of films.characters) {
    let requestPeople;

    try {
      requestPeople = await fetch(`${characterURL}${wookieeStr}`);
    } catch (e) {
      console.log(e);
    } finally {
      const person = await requestPeople.json();

      console.log({ person });

      arrayPeople.push(person);
    }
  }
  if (arrayPeople.length > 0) RenderPerson(arrayPeople);
}

buttonInfo.addEventListener("click", () => {
  getFilms(2);
});

buttonInfoEpisode.addEventListener("click", () => {
  let valueEpisode = Number(inputEpisode.value);
  numberFilm = episodes.indexOf(valueEpisode);
  if (numberFilm === -1) return alert("There isn`t this episode!");
  getFilms(numberFilm + 1);
});

buttonWuki.addEventListener("click", () => {
  isWookie = !isWookie;
  buttonWuki.textContent = isWookie ? "Woo" : "Eng";
});

buttonPlanets.addEventListener("click", () => {
  let wookieeQuery = isWookie ? "?format=wookiee" : "";
  if (location.href.includes("index.html")) {
    location.href = location.href.replace(
      "index.html",
      "planets.html" + wookieeQuery
    );
  } else {
    location.href = location.href + "/planets.html" + wookieeQuery;
  }
});
