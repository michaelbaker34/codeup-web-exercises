"use strict;"

let lat = 29.424;
let lon = -98.495;
let units = "imperial";
let weatherUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${WEATHERMAP_TOKEN}`;

function handleWeatherResponse(data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
        let $div = $("<div>")
                    .addClass("card")
                    .attr("id", "weather-card");
        let $h3 = $("<h3>")
                    .addClass("card-title card-header")
                    .attr("id","city-state")
                    .text("searchInput/clickLocation");
        let $h5Weather = $("<h5>").addClass("card-text").attr("id", "weather")
                    .text(`Day: ${data.daily[i].temp.day} Night: ${data.daily[i].temp.night}`);
        let $h5Description = $("<h5>").addClass("card-text").attr("id", "description")
                    .text(`Description: ${data.daily[i].weather[0].description}`);
        $div.append([$h3, $h5Weather, $h5Description]);
        $div.appendTo($(".cardContainer"));
        // console.log("---day " + i + "---");
        // console.log("day temp: "    + data.daily[i].temp.day);
        // console.log("night temp: "  + data.daily[i].temp.night);
        // console.log("weather: "     + data.daily[i].weather[0].description);
        // console.log("humidity: "    + data.daily[i].humidity);
        // console.log("uv index: "    + data.daily[i].uvi);
        // console.log("wind speed: "  + data.daily[i].wind_speed);
    }
}

function handleGetDone() {
    $.get(weatherUrl).done(handleWeatherResponse);
}

handleGetDone();

// failed jquery card render
// let $div = $("<div>").addClass("card").attr("id", "weather-card");
// let $h3 = $("<h3>").addClass("card-title card-header").attr("id","city-state").text("searchInput/clickLocation");
// let $h5 = $("h5").addClass("card-text").attr("id", "weather").text("weather api details here");
//
// $div.append([$div, $h3, $h5]);
// $("#weather-card-container").append($div);

// console.log(geocode("san antonio, tx", MAPBOX_TOKEN));
// get san antonio temp based on coords
// let temp = $.get(weatherMapUrl
//     + "lat=29.58"
//     + "&lon=-98.39"
//     + units
//     + appId).done(function (data) {
//         console.log(data);
//         console.log(data.current.temp);
//     });
