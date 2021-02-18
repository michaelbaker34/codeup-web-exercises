"use strict;"

$(document).ready(function () {
// location/weather data variables
    mapboxgl.accessToken = MAPBOX_TOKEN;

    /* replace below */
    let lat = 29.42;
    let lon = -98.49;
    let startLocation = [-98.49, 29.42];
    /* replace above */

    let units = "imperial";
    let weatherUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${WEATHERMAP_TOKEN}`;

// handle weatherUrl data
    function handleResponse(data) {
        let location = startLocation;
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

    // create map
        let map = new mapboxgl.Map({
            container: "mapbox",
            style: "mapbox://styles/mapbox/outdoors-v11",
            center: [-98.495, 29.424],
            zoom: 8
        });
    // create marker
        let marker = new mapboxgl.Marker({
            color: "blue",
            draggable: true
        });
        marker.setLngLat(startLocation).addTo(map);

    // set coords from marker
        function setCoords(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            return [lat, lon];
        }

    // get coords ondragend
        function onDragEnd() {
            let lonLat = marker.getLngLat();
            console.log(lonLat);
            return lonLat;
        }
        marker.on("dragend", onDragEnd);

    // render map
        function renderMap() {
            let mapboxDiv = $("#mapbox");
            mapboxDiv.append(map);
            map.addControl(new mapboxgl.NavigationControl());
        }
        return renderMap();
    }

// get searchInput
    $("#searchButton").click(function searchBoxInput() {
        let searchInput = $("#searchLocationBox").val();
        console.log(searchInput);
        return searchInput;
    })

// handle & call weather url handler function
    function handleGetDone() {
        $.get(weatherUrl).done(handleResponse);
    }
    handleGetDone();
});