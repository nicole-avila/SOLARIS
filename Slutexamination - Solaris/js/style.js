const URL = `https://fathomless-shelf-54969.herokuapp.com`;
const apiKey = `solaris-vKkkQHqQboi7c6JF`;
const main = document.querySelector(`main`);

let buttonSun = document.querySelector(`.Sun`);
let buttonMercury = document.querySelector(`.Mercury`);
let buttonVenus = document.querySelector(`.Venus`);
let buttonEarth = document.querySelector(`.Earth`);
let buttonMars = document.querySelector(`.Mars`);
let buttonJuiter = document.querySelector(`.Jupiter`);
let buttonSaturn = document.querySelector(`.Saturn`);
let buttonUranus = document.querySelector(`.Uranus`);
let buttonNeptune = document.querySelector(`.Neptune`);

let solarSystem = ``;
let el = ``;


//ApiKey
async function getKey() {
    const resp = await fetch(`${URL}/keys`, { method: 'POST' });
    const data = await resp.json(); 
    console.log(data);
    // return data.key **Kolla mer på exemplet Johan gick igenom  //{ key: 'solaris-vKkkQHqQboi7c6JF' }
}
// Get planet info, an array.
async function getPlanetInfo(planet) {
    //const key = await fetchKey(); **Kolla närmare på exemplet Johan gick igenom 
    const resp = await fetch(`${URL}/bodies`, { method: 'GET', headers: {'x-zocom': 'solaris-vKkkQHqQboi7c6JF'} });
    
    solarSystem = await resp.json();
    console.log(`Ge inte upp, du kan det här`);

    let Name = solarSystem.bodies[planet].name;
    let LatinName = solarSystem.bodies[planet].latinName; 
    let Desc = solarSystem.bodies[planet].desc;    let Circumference = solarSystem.bodies[planet].circumference;
    let Distance = solarSystem.bodies[planet].distance;
    let MaxTemp = solarSystem.bodies[planet].temp.day;
    let MinTemp = solarSystem.bodies[planet].temp.night;
    let Moons = solarSystem.bodies[planet].moons;
    
    main.innerHTML = ``;
    el = `
        <main> 
            <h1>${Name}</h1>
            <h4>${LatinName}</h4>
            <p class="Desc">${Desc}</p>
            <p class="Circumference">OMKRETS<br>${Circumference} Km</p>
            <p class="Distance">KM FRÅN SOLEN<br>${Distance} Km</p>
            <p class="MaxTemp">MAX TEMPERATUR<br>${MaxTemp} C</p>
            <p class="MinTemp">MIN TEMPERATUR<br>${MinTemp} C</p>
            <p class="Moons">MÅNAR<br>${Moons}</p>
        </main>
    `
    console.log(`Solarsystem work!`);
    main.insertAdjacentHTML(`beforeend`, el);
}

/*
getKey();
getPlanetInfo();
*/


//Enum 
const Planets = {
        Sun: 0,
        Mercury: 1,
        Venus: 2,
        Earth: 3,
        Mars: 4,
        Jupiter: 5,
        Saturn: 6,
        Uranus: 7,
        Neptune: 8,
}

buttonSun.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Sun);
    console.log(`sol knappen funkar!`);
})
buttonMercury.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Mercury);
})
buttonVenus.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Venus);
})
buttonEarth.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Earth);
})
buttonMars.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Mars);
})
buttonJuiter.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Jupiter);
})
buttonSaturn.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Saturn);
})
buttonUranus.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Uranus);
})
buttonNeptune.addEventListener(`click`, function(){
    getPlanetInfo(Planets.Neptune);
})




