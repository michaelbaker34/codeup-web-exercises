"use strict";
mapboxgl.accessToken = mapboxToken;

function renderMap() {
    let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-74.5, 40],
        zoom: 8
    });
}

function geocodeInput(address) {

}

function reverseGeocodeInput(lat, long) {

}