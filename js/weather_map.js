"use strict;"

let lat = 29.424;
let lon = -98.495;
let units = "imperial";
let weatherUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${WEATHERMAP_TOKEN}`;

function handleWeatherResponse(data) {
    console.log(data);
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

        let $div = $("<div>").addClass("card").attr("id", "weather-card");

        let $h3 = $("<h3>").addClass("card-title card-header").attr("id","city-state")
            .text(`Date: ${weatherMapTimeConverter(UNIX_timestamp)} searchInput/clickLocation`);

        let $h5Weather = $("<h5>").addClass("card-text").attr("id", "weather")
            .text(`Day: ${data.daily[i].temp.day}˚F Night: ${data.daily[i].temp.night}˚F`);

        let $h5Description = $("<h5>").addClass("card-text").attr("id", "description")
            .text(`Description: ${data.daily[i].weather[0].description}`);

        let $h5Humidity = $("<h5>").addClass("card-text").attr("id", "humidity")
            .text(`Humidity: ${data.daily[i].humidity}`);

        let $h5UvIndex = $("<h5>").addClass("card-text").attr("id", "uvIndex")
            .text(`UV Index: ${data.daily[i].uvi}`);

        let $h5WindSpeed = $("<h5>").addClass("card-text").attr("id", "windSpeed")
            .text(`Wind Speed: ${data.daily[i].wind_speed}`);

        let $h5WindDirection = $("<h5>").addClass("card-text").attr("id", "windDirection")
            .text(`Wind Direction: ${data.daily[i].wind_deg}`);

        $div.append([$h3, $h5Weather, $h5Description, $h5Humidity, $h5UvIndex, $h5WindSpeed, $h5WindDirection]);
        $div.appendTo($(".card-container"));
    }
}

function handleGetDone() {
    $.get(weatherUrl).done(handleWeatherResponse);
}

handleGetDone();

console.log(geocode("san antonio, tx", MAPBOX_TOKEN));
// get san antonio temp based on coords
let temp = $.get(weatherMapUrl + "lat=29.58" + "&lon=-98.39" + units + appId)
    .done(function (data) {
        console.log(data);
        console.log(data.current.temp);
    });
