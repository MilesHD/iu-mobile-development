
$( document ).on( "pagecreate", "#about", function() {
    var defaultLatLng = new google.maps.LatLng(39.246494, -84.444587);  // Evendale, OH
    drawMap(defaultLatLng); 
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});
