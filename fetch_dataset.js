let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 0,
        center: {lat: -33.865427, lng: 151.196123},
        mapTypeId: "terrain",
    });

    fetch("samples.json")
        .then(response => response.json())
        .then(data => {
            createMarkers(data);
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });
}

function createMarkers(results) {
    console.log(results);
    results.forEach(item => {
        const latLng = new google.maps.LatLng(item.latitude, item.longitude);
        const fatalities = item.fatalities;

        new google.maps.Marker({
            position: latLng,
            map: map,
            icon: getCircle(fatalities),
        });
    });
}

function getCircle(fatalities) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 0.2,
        scale: Math.pow(2, fatalities) / 10,
        strokeColor: "white",
        strokeWeight: 0.5,
    };
}

window.initMap = initMap;
window.getCircle = getCircle;
