const wrapper_planets = document.querySelector(".wrapper_planets");
const buttonWuki = document.querySelector(".btn_wookie");
const hero = document.querySelector(".hero");
const loaderEl = document.querySelector(".loader");

const BASE_URL = "https://swapi.dev/api/";
const queryPlanets = "/planets";
let isWookie = false;

// document.addEventListener("DOMContentLoaded", () => {
//   buttonWuki.textContent = isWookie ? "Woo" : "Eng";
// });

function removeRenderCard() {
  wrapper_planets.innerHTML = "";
}

function startPage() {
  removeRenderCard();
  hero.classList.add("start_hero");
}

function RenderPlanets(planets) {
  loaderEl.classList.replace("position", "ishidden");
  let name = "";

  //const divCards = document.querySelectorAll(".cards_item");

  // for (let divCard of divCards) {
  //   if (divCard) divCard.remove();
  // }

  for (const planet of planets) {
    if (isWookie) {
      name = planet.whrascwo;
    } else {
      name = planet.name;
      rotation_period = planet.rotation_period;
      orbital_period = planet.orbital_period;
      diameter = planet.diameter;
      climate = planet.climate;
      gravity = planet.gravity;
      terrain = planet.terrain;
      surface_water = planet.surface_water;
      population = planet.population;
    }

    const listWrapper = document.createElement("ul");
    listWrapper.classList.add("cards_item");

    const planetName = document.createElement("li");
    planetName.classList.add("planet_name");
    planetName.textContent = name;

    const thumbInfo = document.createElement("div");
    thumbInfo.classList.add("thumb");
    thumbInfo.innerHTML = `rotation_period ${rotation_period}; 
      orbital_period ${orbital_period};
      diameter ${planet.diameter};
      climate ${planet.climate};
      gravity ${planet.gravity};
      terrain ${planet.terrain};
      surface_water ${planet.surface_water};
      population ${planet.population}`;

    listWrapper.append(planetName);
    listWrapper.append(thumbInfo);

    wrapper_planets.append(listWrapper);
  }
  hero.classList.replace("start_hero", "hero_planet");
}

async function getPlanets() {
  const wookieeStr = isWookie ? "?format=wookiee" : "";
  const requestPlanet = await fetch(`${BASE_URL}${queryPlanets}${wookieeStr}`);
  const planets = await requestPlanet.json();
  // const arrayPlanets = [];

  console.log({ planets });

  // for (const planet of planets.results) {
  //   arrayPlanets.push(planet);
  // }

  RenderPlanets([...planets.results]);
}

document.addEventListener("DOMContentLoaded", () => {
  startPage();
  isWookie = location.href.includes("?format=wookiee");
  buttonWuki.textContent = isWookie ? "Woo" : "Eng";
  getPlanets();
});

buttonWuki.addEventListener("click", () => {
  isWookie = !isWookie;
  buttonWuki.textContent = isWookie ? "Woo" : "Eng";
  getPlanets();
});
