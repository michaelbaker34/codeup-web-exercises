"use strict;"

$.get("https://api.openweathermap.org/data/2.5/onecall?" +
    "lat={lat}&" +
    "lon={lon}&" +
    "exclude={part}&" +
    "appid={API key}" +
    WEATHERMAP_TOKEN).done(function (data) {
        console.log(data)
    });