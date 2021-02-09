"use strict;"

let cityList = $.get("data/city.json");
let weatherMapUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let appId = "&appid=" + WEATHERMAP_TOKEN;
let units = "&units=imperial";

    // get temperature
let temp = $.get(weatherMapUrl +
    "lat=29.58&" +
    "lon=-98.39&" +
    "units=imperial" +
    appId).done(function (data) {
        // console.log(data);
        // console.log(data.current.temp);
    });

function handleResponse(cities) {
    let html = "";
    cities.forEach(function (city) {
        let temp = 0;
        let name = city.cityName;
        let cityHtml = "<h2>City: " + name + "</h2>";
        cityHtml += "<h4>Temperature: " + temp + "</h4>"
        html += cityHtml;
    });
    $("#current-city").html(html);
}

cityList.done(handleResponse);

// console.log(geocode("san antonio, texas 78247", MAPBOX_TOKEN));
// console.log(geocode("bradley beach, new jersey 07720", MAPBOX_TOKEN));