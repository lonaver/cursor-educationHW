const wrapper = document.querySelector(".wrapper_person");
const buttonInfo = document.querySelector(".btn_info");
const buttonInfoEpisode = document.querySelector(".btn_info_episode");
const buttonWuki = document.querySelector(".btn_wookie");
const loaderEl = document.querySelector(".loader");

const inputEpisode = document.querySelector("#input_episode");
const hero = document.querySelector(".hero");
const titleEpisode = document.querySelector(".title_episode");
const divCards = document.querySelectorAll(".cards_item");
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

function removeRenderCard() {
  wrapper.innerHTML = "";
}

function pageCards() {
  removeRenderCard();
}

function startPage() {
  removeRenderCard();
  hero.classList.replace("hero_bcg", "start_hero");
}

function RenderPerson(people, numberFilm) {
  loaderEl.classList.replace("position", "ishidden");
  pageCards();
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
    if (!isWookie) {
      switch (gender) {
        case "male": {
          personGender.classList.add("person_man");
          break;
        }
        case "female": {
          personGender.classList.add("person_women");
          break;
        }
        default: {
          personGender.classList.add("person_na");
        }
      }
    }
    titleEpisode.textContent = `Episode ${episodes[numberFilm - 1]}`;
    personWrapper.append(personName);
    personWrapper.append(personBirth);
    personWrapper.append(personGender);

    wrapper.append(personWrapper);
  }
  hero.classList.replace("start_hero", "hero_bcg");
}

async function getFilms(numEpisode) {
  const wookieeStr = isWookie ? "?format=wookiee" : "";
  loaderEl.classList.replace("ishidden", "position");

  const request = await fetch(`${BASE_URL}${queryFilms}${numEpisode}`);
  const films = await request.json();

  const arrayPeople = [];

  console.log({ films });

  for (const characterURL of films.characters) {
    let requestPeople;

    try {
      requestPeople = await fetch(`${characterURL}${wookieeStr}`);
      const person = await requestPeople.json();
      arrayPeople.push(person);
      console.log({ person });
    } catch (e) {
      console.log(e);
    } finally {
      // loaderEl.classList.replace("position", "ishidden");
    }
  }
  if (arrayPeople.length > 0) RenderPerson(arrayPeople, numEpisode);
}

document.addEventListener("DOMContentLoaded", () => {
  hero.classList.add("start_hero");
});

buttonInfo.addEventListener("click", () => {
  startPage();
  getFilms(2);
});

buttonInfoEpisode.addEventListener("click", () => {
  startPage();
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
  startPage();
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
