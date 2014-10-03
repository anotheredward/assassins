var mapClick = function(e) {
	if (~e.target.className.baseVal.indexOf('jvectormap-region')) {
		$("#cityname").text($(e.target).attr("data-code").toLowerCase());
	}
};
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
