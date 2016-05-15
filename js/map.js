;(function($){
	$(window).load(function(){
		var $mapDiv = ($('#map')[0]);
		var $map = new google.maps.Map($mapDiv, {
			center: {lat: 49.592552, lng: 34.547128},
			zoom: 15
		});
		var $marker = new google.maps.Marker({
			position: {lat: 49.592552, lng: 34.547128},
			map: $map,

		});
	});
})(jQuery);
