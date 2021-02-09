"use strict;"

    // geocode and log san antonio lat/long
let saCoords = geocode("san antonio, texas 78247", MAPBOX_TOKEN);
// console.log(saCoords);

    // get san antonio current temp
let saCurrentTemp = $.get("https://api.openweathermap.org/data/2.5/onecall?" +
    "lat=29.58&" +
    "lon=-98.39&" +
    "units=imperial&" +
    "exclude={part}&" +
    "appid=" + WEATHERMAP_TOKEN).done(function (data) {
        console.log(data.current.temp);
    });