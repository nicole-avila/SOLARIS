const URL = `https://fathomless-shelf-54969.herokuapp.com`;
const apiKey = `solaris-vKkkQHqQboi7c6JF`;
const main = document.querySelector(`main`);
const header = document.querySelector(`header`);
const footer = document.querySelector(`footer`);

let buttonSun = document.querySelector(`.sun`);
let buttonMercury = document.querySelector(`.mercury`);
let buttonVenus = document.querySelector(`.venus`);
let buttonEarth = document.querySelector(`.earth`);
let buttonMars = document.querySelector(`.mars`);
let buttonJuiter = document.querySelector(`.jupiter`);
let buttonSaturn = document.querySelector(`.saturn`);
let buttonSaturnR = document.querySelector(`.saturnRing`);
let buttonUranus = document.querySelector(`.uranus`);
let buttonNeptune = document.querySelector(`.neptune`);
//let asidePlanet = document.querySelector(`.one`)
let solarSystem = ``;
let el = ``;


async function getKey() {
    const resp = await fetch(`${URL}/keys`, { method: 'POST' });
    const data = await resp.json(); 
    console.log(data);
    return data.key
}
async function getPlanetInfo(planet) {
    const key = await getKey();
    const resp = await fetch(`${URL}/bodies`, { method: 'GET', headers: {'x-zocom': key} });

    solarSystem = await resp.json();
    console.log(solarSystem);

    let Name = solarSystem.bodies[planet].name;
    let LatinName = solarSystem.bodies[planet].latinName; 
    let Desc = solarSystem.bodies[planet].desc;    
    let Circumference = solarSystem.bodies[planet].circumference;
    let Distance = solarSystem.bodies[planet].distance;
    let MaxTemp = solarSystem.bodies[planet].temp.day;
    let MinTemp = solarSystem.bodies[planet].temp.night;
    let Moons = solarSystem.bodies[planet].moons.join(`, `);
    
    header.innerHTML = ``;
    main.innerHTML = ``;
    footer.innerHTML = ``;
    el = `
        <figure class="planetAside-one"></figure>
        <figure class="planetAside-two"></figure>
        <figure class="planetAside-three"></figure>
        <main>
            <h1>${Name}</h1>
            <h4>${LatinName}</h4>
            <p class="desc">${Desc}</p>
                <hr class="hr1">
            <h3 class="circumference-header">OMKRETS</h3>
                <p class="circumference">${Circumference} Km</p>
            <h3 class="distance-header">KM FRÅN SOLEN</h3>
                <p class="distance">${Distance} Km</p>
            <h3 class="maxTemp-header">MAX TEMPERATUR</h3>
                <p class="maxTemp">${MaxTemp} C</p>
            <h3 class="minTemp-header">MIN TEMPERATUR</h3>
                <p class="minTemp">${MinTemp} C</p>
                <hr class="hr2">   
            <h3 class="moons-header">MÅNAR</h3>
                <p class="moons">${Moons}</p>
            <footer>
            <button class="backToPage">Tillbaka</button>
            </footer>  
        </main>
        <figure class="starOne"></figure> <figure class="starTwo"></figure> <figure class="starThree"></figure> <figure class="starFour"></figure> <figure class="starFive"></figure> <figure class="starSix"></figure> <figure class="starSeven"></figure> <figure class="starEight"></figure> <figure class="starNine"></figure> <figure class="starTen"></figure> <figure class="starEleven"></figure> <figure class="starTwelve"></figure>
        <figure class="starThirteen"></figure> <figure class="starFourteen"></figure> <figure class="starFifteen"></figure> <figure class="starSixteen"></figure> <figure class="starSeventeen"></figure> <figure class="starEighteen"></figure> <figure class="starNineteen"></figure> <figure class="starTwenty"></figure> <figure class="starTwentyOne"></figure> <figure class="starTwentyTwo"></figure> <figure class="starTwetyThree"></figure> <figure class="starTwentyFour"></figure>
        <figure class="starTwentyFive"></figure> <figure class="starTwentySix"></figure> <figure class="starTwentySeven"></figure> <figure class="starTwentyEight"></figure> <figure class="starTwentyNine"></figure> <figure class="Thirty"></figure>
            `
    console.log(`Solarsystem work!`);
    main.insertAdjacentHTML(`beforeend`, el);

    let resetBtn = document.querySelector(`.backToPage`);
    resetBtn.addEventListener('click',function(){
        location.reload()
        console.log('resetBtn work!');
    })
}

const Planets = {
        sun: 0,
        mercury: 1,
        venus: 2,
        earth: 3,
        mars: 4,
        jupiter: 5,
        saturn: 6,
        saturnRing: 6,
        uranus: 7,
        neptune: 8,
}

buttonSun.addEventListener(`click`, function(){
    getPlanetInfo(Planets.sun);
    console.log(`sol knappen funkar!`);
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
buttonSaturnR.addEventListener(`click`, function(){
    getPlanetInfo(Planets.saturnRing);
})
buttonUranus.addEventListener(`click`, function(){
    getPlanetInfo(Planets.uranus);
})
buttonNeptune.addEventListener(`click`, function(){
    getPlanetInfo(Planets.neptune);
})