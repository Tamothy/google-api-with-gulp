var map;
function initialize() {
  var center = new google.maps.LatLng(45.5231,-122.6765);
  map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom:15,
      mapTypeId: 'roadmap'
  });

  var request = {
    location: center,
    radius: 9000,
    types: ['burrito']
  };

  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if(status == google.maps.places.PlacesServiceStatus.OK) {
    for(var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}

// google.maps.event.addDomListener(window, 'load', initialize);
