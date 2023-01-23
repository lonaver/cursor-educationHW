const wrapper_planets = document.querySelector(".wrapper_planets");
const buttonWuki = document.querySelector(".btn_wookie");
const hero = document.querySelector(".hero");

const BASE_URL = "https://swapi.dev/api/";
const queryPlanets = "/planets";
let isWookie = false;

document.addEventListener("DOMContentLoaded", () => {
  buttonWuki.textContent = isWookie ? "Woo" : "Eng";
});

function RenderPlanets(planets) {
  let name = "";
  const divCards = document.querySelectorAll(".cards_item");

  for (let divCard of divCards) {
    if (divCard) divCard.remove();
  }

  for (const planet of planets) {
    if (isWookie) {
      name = planet.whrascwo;
    } else {
      name = planet.name;
    }

    const listWrapper = document.createElement("ul");
    listWrapper.classList.add("cards_item");

    const planetName = document.createElement("li");
    planetName.classList.add("planet_name");
    planetName.textContent = name;

    listWrapper.append(planetName);
    wrapper_planets.append(listWrapper);
  }
  hero.classList.add("hero_bcg");
}

async function getPlanets() {
  const wookieeStr = isWookie ? "?format=wookiee" : "";
  const requestPlanet = await fetch(`${BASE_URL}${queryPlanets}${wookieeStr}`);
  const planets = await requestPlanet.json();
  const arrayPlanets = [];

  console.log({ planets });

  for (const planet of planets.results) {
    arrayPlanets.push(planet);
  }

  RenderPlanets(arrayPlanets);
}

document.addEventListener("DOMContentLoaded", () => {
  isWookie = location.href.includes("?format=wookiee");
  buttonWuki.textContent = isWookie ? "Woo" : "Eng";
  getPlanets();
});
buttonWuki.addEventListener("click", () => {
  isWookie = !isWookie;
  buttonWuki.textContent = isWookie ? "Woo" : "Eng";
  getPlanets();
});
