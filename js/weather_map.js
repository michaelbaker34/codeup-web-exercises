"use strict;"

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: WEATHERMAP_TOKEN,
    q: "San Antonio, Tx, US",
    units: "imperial"
}).done((data) => console.log(data));

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
//     $("#placesCards").html(html);
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