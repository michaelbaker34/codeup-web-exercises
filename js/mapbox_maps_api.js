"use strict";
mapboxgl.accessToken = mapboxToken;

const vesuvioCoords = [11.548, 45.548];
let vesuvioPopup = new mapboxgl.Popup().setHTML("<p id='vesuvio-desc'>" +
    "<h6>Pizzeria Vesuvio</h6> delights the palate with a cuisine " +
    "enriched by the presence of southern ingredients and inspirations.</p>");

const mellowCoords = [-98.490, 29.609];
let mellowPopup = new mapboxgl.Popup().setHTML("<p id='mellow-desc'>" +
    "<h6>Mellow Mushroom</h6> an art-filled chain pizzeria featuring " +
    "craft beer, calzones and creative stone-baked pizzas.</p>");

const pizzaMainCoords = [-74.016, 40.205];
let pizzaMainPopup = new mapboxgl.Popup().setHTML("<p id='pizza-main-desc'>" +
    "<h6>Pizza On Main</h6> a delicious local pizzaria spot with delicious " +
    "wraps, calzones, strombolis and even delivery to the beach! " +
    "<br><em>812 Main St, Bradley Beach, NJ 07720</em></p>");

let map = new mapboxgl.Map({
    container: "mapbox",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-45, 45],
    zoom: 1.5
});

function renderMap() {
    let mapboxDiv = $("#mapbox");
    mapboxDiv.append(map);
    map.addControl(new mapboxgl.NavigationControl());
}

function markMap(targetCoords, targetPopup) {
    new mapboxgl.Marker().setLngLat(targetCoords).setPopup(targetPopup).addTo(map);
}