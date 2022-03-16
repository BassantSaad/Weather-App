let myKey = "fa34bba659f64bd99c690938221603";
let day0Head = document.getElementById('day0-head');
let day0Body = document.getElementById('day0-body');
let day1Head = document.getElementById('day1-head');
let day1Body = document.getElementById('day1-body');
let day2Head = document.getElementById('day2-head');
let day2Body = document.getElementById('day2-body');
let search = document.getElementById('search');
let btn = document.getElementById('btn');


// ////////////  Get API /////////// //

async function getWeather(city) {
   let apiResp = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${myKey}&q=${city}&days=3` );

   let data = await apiResp.json()
    displayData(data)
};

// ////////////  Display Data /////////// //

function displayData(data){


    // //////////// day0 //////////// //
    day0Head.innerHTML=`
    <p>${new Date(data.forecast.forecastday[0].date).getDate()}</p>
    <p>${new Date(data.forecast.forecastday[0].date).toLocaleString('defult' , {month: 'long'})}</p>
    <p>${new Date(data.forecast.forecastday[0].date).getFullYear()}</p>
    `
    
    day0Body.innerHTML=`
    <div class="text-center py-2"><h2>${data.location.name}</h2></div>
    <div class="d-flex justify-content-center align-items-center">
        <h3 class="px-3 pt-2 fw-bold">${Math.floor(data.forecast.forecastday[0].day.maxtemp_c)} <small>&#8451</small> </h3>
        <img class="pe-5 " src="https:${data.current.condition.icon}"/>
    </div>
    <div class="text-center"><h4 class="pb-2">${Math.floor(data.forecast.forecastday[0].day.mintemp_c)} <small>&#8451</small></h4></div>
    <p class="cloud py-3 text-center">${data.current.condition.text}</p>
    <div class="d-flex justify-content-evenly px-4 pb-2">
        <span><img src="imgs/icon-umberella.png"> ${data.forecast.forecastday[0].day.avghumidity}%</span>
        <span><img src="imgs/icon-wind.png"> ${data.forecast.forecastday[0].day.maxwind_kph} KM/hr</span>
    </div>
    `

    // //////////// day1 //////////// //
    day1Head.innerHTML=`
    <p>${new Date(data.forecast.forecastday[1].date).getDate()}</p>
    <p>${new Date(data.forecast.forecastday[1].date).toLocaleString('defult' , {month: 'long'})}</p>
    <p>${new Date(data.forecast.forecastday[1].date).getFullYear()}</p>
    `
    
    day1Body.innerHTML=`
    <img class="px-5 py-2" src="https:${data.forecast.forecastday[1].day.condition.icon}"/>
    <div class="py3">
    <h3 class="pt-2">${Math.floor(data.forecast.forecastday[1].day.maxtemp_c)} <small>&#8451</small></h3>
    <h4 class="pt-2">${Math.floor(data.forecast.forecastday[1].day.mintemp_c)} <small>&#8451</small></h4>
    </div>
    <p class="pt-4 pb-2 cloud">${data.forecast.forecastday[1].day.condition.text}</p>
    <div class="d-flex justify-content-evenly px-4 pb-3 pt-2">
        <span><img src="imgs/icon-umberella.png"> ${data.forecast.forecastday[1].day.avghumidity}%</span>
        <span><img src="imgs/icon-wind.png"> ${data.forecast.forecastday[1].day.maxwind_kph} KM/hr</span>
    </div>
    `

    // //////////// day2 //////////// //
    day2Head.innerHTML=`
    <p>${new Date(data.forecast.forecastday[2].date).getDate()}</p>
    <p>${new Date(data.forecast.forecastday[2].date).toLocaleString('defult' , {month: 'long'})}</p>
    <p>${new Date(data.forecast.forecastday[2].date).getFullYear()}</p>
    `
    
    day2Body.innerHTML=`
    <img class="px-5 py-2" src="https:${data.forecast.forecastday[2].day.condition.icon}"/>
    <div class="py3">
    <h3 class="pt-2">${Math.floor(data.forecast.forecastday[2].day.maxtemp_c)} <small>&#8451</small></h3>
    <h4 class="pt-2">${Math.floor(data.forecast.forecastday[2].day.mintemp_c)} <small>&#8451</small></h4>
    </div>
    <p class="pt-4 pb-2 cloud">${data.forecast.forecastday[2].day.condition.text}</p>
    <div class="d-flex justify-content-evenly px-4 pt-2 pb-3">
        <span><img src="imgs/icon-umberella.png"> ${data.forecast.forecastday[2].day.avghumidity}%</span>
        <span><img src="imgs/icon-wind.png"> ${data.forecast.forecastday[2].day.maxwind_kph} KM/hr</span>
    </div>
    `
};

// //////////// Events //////////// //

btn.addEventListener('click' , ()=>{
    let city = search.value ;
    if(city){
        getWeather(city)
        clr()
    }});

search.addEventListener('keyup' , ()=>{
        let city = search.value ;
            getWeather(city)
});

function clr() {
    search.value = ''
};

getWeather('cairo');