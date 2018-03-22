
  function showForm(){
    var box = document.getElementById("logIn");
    box.classList.toggle("show");
  }

  function connect(){
    var box = document.getElementById("signIn");
    box.classList.toggle("show");
  }

  function close() {
    var box = document.getElementById("popUp");
    box.classList.toggle("show");
  }

  // var GoogleMapsApiLoader = require('google-maps-api-loader');
  // GoogleMapsApiLoader({
  //       libraries: ['places'],
  //       apiKey: 'your-api-key' // optional
  //   })
  //   .then(function(googleApi) {
  //       var autocomplete = new googleApi.maps.places.AutocompleteService();
  //   }, function(err) {
  //       console.error(err);
  //   });

  var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 48.8534, lng: 2.3488},
      zoom: 11
    });
  }
  //   infoWindow = new google.maps.InfoWindow;
  //
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //
  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent('Location found.');
  //       infoWindow.open(map);
  //       map.setCenter(pos);
  //     }, function() {
  //       handleLocationError(true, infoWindow, map.getCenter());
  //     });
  //   } else {
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }
  //
  // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browserHasGeolocation ?
  //                         'Error: The Geolocation service failed.' :
  //                         'Error: Your browser doesn\'t support geolocation.');
  //   infoWindow.open(map);
  // }
