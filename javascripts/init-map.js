var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.8282, lng: -98.5795},
    zoom: 4,
    draggable: true,
    zoomable: true
  });
}

initMap();
