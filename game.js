var districts = [];
var codes = city_map.paths;
for(var key in codes){
	if (codes.hasOwnProperty(key)){
		districts[key]={strength: 4};
	}
}

var mapClick = function(e) {
	if (~e.target.className.baseVal.indexOf('jvectormap-region')) {
		var district_name = $(e.target).attr("data-code");
		$("#district").text(district_name);
		$("#strength").text(districts[district_name].strength);
	}
};

$('#attack').on('click', function() {
	var district_name = $('#district').text();
	districts[district_name].strength -= 1;
	$("#strength").text(districts[district_name].strength);
});


$(function(){
	var map = $('#city-map').vectorMap({
		map: 'be_merc_en',
	    backgroundColor: '#3F5666',
	    regionsSelectable: true,
	    regionsSelectableOne: true,
	    regionStyle: {
		    initial: {
			    fill: '#F5E5C0'
		    },
	    selected: {
		    fill: '#F8CA4D'
	    },
	    }
	});
	map.on('click', mapClick);
});
