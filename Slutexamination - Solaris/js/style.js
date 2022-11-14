const URL = `https://fathomless-shelf-54969.herokuapp.com`;
const apiKey = `solaris-vKkkQHqQboi7c6JF`;
const main = document.querySelector(`main`);

let buttonSun = document.querySelector(`.sun`);
let buttonMercury = document.querySelector(`.mercury`);
let buttonVenus = document.querySelector(`.venus`);
let buttonEarth = document.querySelector(`.earth`);
let buttonMars = document.querySelector(`.mars`);
let buttonJuiter = document.querySelector(`.jupiter`);
let buttonSaturn = document.querySelector(`.saturn`);
let buttonUranus = document.querySelector(`.uranus`);
let buttonNeptune = document.querySelector(`.neptune`);
let resetBtn = document.querySelector(`.backToPage`);

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
    let Desc = solarSystem.bodies[planet].desc;    
    let Circumference = solarSystem.bodies[planet].circumference;
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
        sun: 0,
        mercury: 1,
        venus: 2,
        earth: 3,
        mars: 4,
        jupiter: 5,
        saturn: 6,
        uranus: 7,
        neptune: 8,
}

buttonSun.addEventListener(`click`, function(){
    getPlanetInfo(Planets.sun);
    console.log(`sol knappen funkar!`);
    resetBtn.style.display = `flex`
})
buttonMercury.addEventListener(`click`, function(){
    getPlanetInfo(Planets.mercury);
})
buttonVenus.addEventListener(`click`, function(){
    getPlanetInfo(Planets.venus);
})
buttonEarth.addEventListener(`click`, function(){
    getPlanetInfo(Planets.earth);
})
buttonMars.addEventListener(`click`, function(){
    getPlanetInfo(Planets.mars);
})
buttonJuiter.addEventListener(`click`, function(){
    getPlanetInfo(Planets.jupiter);
})
buttonSaturn.addEventListener(`click`, function(){
    getPlanetInfo(Planets.saturn);
})
buttonUranus.addEventListener(`click`, function(){
    getPlanetInfo(Planets.uranus);
})
buttonNeptune.addEventListener(`click`, function(){
    getPlanetInfo(Planets.neptune);
})


resetBtn.addEventListener('click',()=> {
    console.log('yo');
    location.reload()
})