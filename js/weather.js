
const API_KEY ='15f24fe2934a2ee7fa248d6b912f76e8';

function onGeoOk(position) {
const lat = position.coords.latitude;
const lon = position.coords.longitude;
console.log("You alive in" ,lat ,lon)
const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:nth-child(2)")
    const city = document.querySelector("#weather span:nth-child(1)")
    const imogi = document.querySelector("#weather span:nth-child(3)")
    imogi.innerHTML = whetherNow(data.weather[0].main); 
    weather.innerText = `${data.weather[0].main}`;
    city.innerText = data.name;
} );
}
function whetherNow(weatherType) {
  if (weatherType === "Rain" || "mist") {
    return '🌧️';
  } else if (weatherType === "Clouds") {
    return '☁️';
  }
}

function onGeoError() {
   alert( "you are in out side of earth");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//getCurrentPosition(positioncallback,errorcallback)