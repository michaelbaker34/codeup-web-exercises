"use strict;"

let lat = "lat=29.424";
let lon = "&lon=-98.495";
let units = "&units=imperial";
let appId = "&appid=" + WEATHERMAP_TOKEN;
let weatherUrl = $.get("http://api.openweathermap.org/data/2.5/onecall?" + lat + lon + units + appId);

function handleWeatherResponse(data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
        console.log("---day "       + i + "---");
        console.log("day temp: "    + data.daily[i].temp.day);
        console.log("night temp: "  + data.daily[i].temp.night);
        console.log("weather: "     + data.daily[i].weather[0].description);
        console.log("humidity: "    + data.daily[i].humidity);
        console.log("uv index: "    + data.daily[i].uvi);
        console.log("wind speed: "  + data.daily[i].wind_speed);
    }
}

weatherUrl.done(handleWeatherResponse);

console.log(geocode("san antonio, tx", MAPBOX_TOKEN));

// renderHTML using locations.json
// let weatherMapUrl = "https://api.openweathermap.org/data/2.5/onecall?";
// let appId = "&appid=" + WEATHERMAP_TOKEN;
// let units = "&units=imperial";
// let locationsUrl = "data/locations.json";
// function handleResponse(locations) {
//     let html = "";
//     locations.forEach(function (data) {
//         let cityState = data.cityName + ", " + data.stateName;
//         let temp = "0";
//         let placeHtml = '<div class="card-body">';
//         placeHtml += '<div class="card-header card-title">' + cityState + '</div>';
//         placeHtml += '<div class="card-body">Current Temp: ' + temp + '</div>'
//         placeHtml += '</div>';
//         html += placeHtml
//     });
//     $("#locationCards").html(html);
// }
// function handleGetDone() {
//     $.get(locationsUrl).done(handleResponse);
// }
// handleGetDone();

// get san antonio temp based on coords
// let temp = $.get(weatherMapUrl
//     + "lat=29.58"
//     + "&lon=-98.39"
//     + units
//     + appId).done(function (data) {
//         console.log(data);
//         console.log(data.current.temp);
//     });
// console.log(geocode("san antonio, texas 78247", MAPBOX_TOKEN));
// console.log(geocode("bradley beach, new jersey 07720", MAPBOX_TOKEN));
// console.log(geocode("rincon, california 92061", MAPBOX_TOKEN));