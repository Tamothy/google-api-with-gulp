window.addEventListener('load',function(){

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDevrI9jJaRbgLwkYJxVvw3nBDiL90mogM&libraries=places';
  document.body.appendChild(script);
});

var map;
var infowindow;

var request;
var service;
var markers =[];

function initialize() {

  var curLocation = new google.maps.LatLng(45.5231,-122.6765);
  map = new google.maps.Map(document.getElementById('map'), {
      center: curLocation,
      zoom:13,
      mapTypeId: 'roadmap'
  });

  request = {
    location: curLocation,
    radius: 6000,
    keyword: 'burrito'
  };
  infowindow = new google.maps.InfoWindow();

  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, callback);

  google.maps.event.addListener(map, 'rightclick', function(event) {
    map.setCenter(event.latLng)
    clearResults(markers)

    var request = {
      location: event.latLng,
      radius: 8000,
      keyword: 'burrito'
    };
    service.nearbySearch(request, callback);
  })
}

function callback(results, status) {
  if(status == google.maps.places.PlacesServiceStatus.OK) {
    for(var i = 0; i < results.length; i++) {
      markers.push(createMarker(results[i]));
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    'Address: ' + place.vicinity + '<br>' +
    'Rating: ' + place.rating + '</div>');
    infowindow.open(map, this);
  });
  return marker;

}

function clearResults(markers) {
  for (var m in markers) {
    markers[m].setMap(null)
  }
  markers = []
}

// google.maps.event.addDomListener(window, 'load', initialize);
