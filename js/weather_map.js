"use strict;"

$(document).ready(function () {
// global location/weather data
let lat = 29.424;
let lon = -98.495;
let units = "imperial";
let weatherUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${WEATHERMAP_TOKEN}`;

// handle weatherUrl data
function handleWeatherResponse(data) {
    // console.log(data);
// jumbotron
    let location = "city, state";
    location = $(".location").text(`Location: ${location}`);

// for (first 5 data.daily objects)
    for (let i = 0; i < 5; i++) {
        // credit: for timeConverter function https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript/847196#847196
        let UNIX_timestamp = data.current.dt;
        function weatherMapTimeConverter(UNIX_timestamp) {
            let a = new Date(UNIX_timestamp * 1000);
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let date = a.getDate() + i;
            return `${month} ${date}, ${year}`;
        }
// convert windDirection Degrees to windDirection Cardinal/Ordinal
        let windDegrees = data.daily[i].wind_deg;
        function headingToCardinal (windDegrees) {
            let tol = Math.round((windDegrees / 45));
            let dir = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
            return dir[(tol % 8)];
        }
// html variables
        let date = weatherMapTimeConverter(UNIX_timestamp);
        let dayTemp = Math.round(data.daily[i].temp.day);
        let nightTemp = Math.round(data.daily[i].temp.night);
        let description = data.daily[i].weather[0].description;
        let humidity = data.daily[i].humidity;
        let uvIndex = data.daily[i].uvi;
        let windSpeed = Math.round(data.daily[i].wind_speed);
        let windDir = headingToCardinal(windDegrees);
// format html variables
        let $div = $("<div>").addClass("col card weather-card border border-primary");
        let $h6Date = $("<h6>").addClass("card-title card-header date bg-primary").text(`Date: ${date}`);
        let $pWeather = $("<p>").addClass("card-text weather").text(`Day: ${dayTemp}˚F Night: ${nightTemp}˚F`);
        let $pHumidity = $("<p>").addClass("card-text humidity").text(`Humidity: ${humidity}`);
        let $pUvIndex = $("<p>").addClass("card-text uvIndex").text(`UV Index: ${uvIndex}`);
        let $pWindSpeed = $("<p>").addClass("card-text windSpeed").text(`Wind Speed: ${windSpeed} kts`);
        let $pWindDir = $("<p>").addClass("card-text windDir").text(`Wind Direction: ${windDegrees}˚ (${windDir})`);
        let $pDescription = $("<p>").addClass("card-text description").text(`Description: ${description}`);
// render html variables
        $div.append([$h6Date, $pWeather, $pHumidity, $pUvIndex, $pWindSpeed, $pWindDir, $pDescription]);
        $div.appendTo($(".weather-content"));
    }
}

// handle mapUrl data
function handleMapResponse() {
mapboxgl.accessToken = MAPBOX_TOKEN;
    let map = new mapboxgl.Map({
        container: "mapbox",
        style: "mapbox://styles/mapbox/outdoors-v11",
        center: [-98.495, 29.424],
        zoom: 8
    })

    function renderMap() {
        let mapboxDiv = $("#mapbox");
        mapboxDiv.append(map);
        map.addControl(new mapboxgl.NavigationControl());
    }
    return renderMap()
    console.log("map done");

    let targetCoords = lat + lon;

    function markMap(targetCoords) {
        new mapboxgl.Marker().setLngLat(targetCoords).addTo(map);
        return markMap(targetCoords);
    }
}

// handle & call weather url handler function
function handleGetDone() {
    $.get(weatherUrl).done(handleWeatherResponse);
}
handleGetDone();
handleMapResponse();

// console.log(geocode("san antonio, tx", MAPBOX_TOKEN));
// // get san antonio temp based on coords
// let temp = $.get(weatherMapUrl + "lat=29.58" + "&lon=-98.39" + units + appId)
//     .done(function (data) {
//         console.log(data);
//         console.log(data.current.temp);
//     });
});