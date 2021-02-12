"use strict;"

// global location/weather data
let lat = 29.424;
let lon = -98.495;
let units = "imperial";
let weatherUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${WEATHERMAP_TOKEN}`;

// handle weatherUrl data
function handleWeatherResponse(data) {
    console.log(data);

// jumbotron
    let location = "city, state";
    location = $(".location").text(`Location: ${location}`);

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
// html variables
        let date = weatherMapTimeConverter(UNIX_timestamp);
        let dayTemp = Math.round(data.daily[i].temp.day);
        let nightTemp = Math.round(data.daily[i].temp.night);
        let description = data.daily[i].weather[0].description;
        let humidity = data.daily[i].humidity;
        let uvIndex = data.daily[i].uvi;
        let windSpeed = Math.round(data.daily[i].wind_speed);
        let windDir = data.daily[i].wind_deg;
// format html variables
        let $div = $("<div>").addClass("col-2 card weather-card");
        let $h6Date = $("<h6>").addClass("card-title card-header date").text(`Date: ${date}`);
        let $pWeather = $("<p>").addClass("card-text weather").text(`Day: ${dayTemp}˚F Night: ${nightTemp}˚F`);
        let $pHumidity = $("<p>").addClass("card-text humidity").text(`Humidity: ${humidity}`);
        let $pUvIndex = $("<p>").addClass("card-text uvIndex").text(`UV Index: ${uvIndex}`);
        let $pWindSpeed = $("<p>").addClass("card-text windSpeed").text(`Wind Speed: ${windSpeed} kts`);
        let $pWindDir = $("<p>").addClass("card-text windDir").text(`Wind Direction: ${windDir}˚`);
        let $pDescription = $("<p>").addClass("card-text description").text(`Description: ${description}`);
// render html variables
        $div.append([$h6Date, $pWeather, $pHumidity, $pUvIndex, $pWindSpeed, $pWindDir, $pDescription]);
        $div.appendTo($(".card-container"));
    }
}

// handle & call weather url handler function
function handleGetDone() {
    $.get(weatherUrl).done(handleWeatherResponse);
}
handleGetDone();

// console.log(geocode("san antonio, tx", MAPBOX_TOKEN));
// // get san antonio temp based on coords
// let temp = $.get(weatherMapUrl + "lat=29.58" + "&lon=-98.39" + units + appId)
//     .done(function (data) {
//         console.log(data);
//         console.log(data.current.temp);
//     });
