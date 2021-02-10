"use strict;"

let placesUrl = "data/places.json";
let weatherMapUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let appId = "&appid=" + WEATHERMAP_TOKEN;
let units = "&units=imperial";

function handleResponse(places) {
    let html = "";
    places.forEach(function (place) {
        let cityState = place.cityName + ", " + place.stateName;
        let temp = "Temperature: 0";
        console.log(cityState);
        let placeHtml = '<div class="card-body">';
        placeHtml += '<div class="card-title">' + cityState + '</div>';
        placeHtml += '<div class="card-body">' + temp + '</div>'
        placeHtml += '</div>';
        html += placeHtml
    });
    $("#placesCards").html(html);
}
$.get(placesUrl).done(handleResponse);

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