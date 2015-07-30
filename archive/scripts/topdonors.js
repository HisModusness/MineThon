function dataCallback(data) {
	var top = data.topDonors;
	for (var i = 1; i <= 6; i++) {
		nameElement = "#d" + i + "h";
		amountElement = "#d" + i + "p";
		
		name = i + ". " + top[i-1].screen;
		amount = "$" + top[i-1].total;
		
		$(nameElement).text(name);
		$(amountElement).text(amount);
	}
}

function ajaxVersion() {
	alert("calling");
	$.ajax({
    	url: 'http://imraising.com/minethon/json/livedata.jsonp',
        dataType: 'jsonp',
        success: function(dataWeGotViaJsonp){
        	var top = data.topDonors;
			for (var i = 1; i <= 6; i++) {
				var nameElement = "#d" + i + "h";
				var amountElement = "#d" + i + "p";
				
				var name = i + ". " + top[i-1].screen;
				var amount = "$" + top[i-1].total;
				
				$(nameElement).text(name);
				$(amountElement).text(amount);
			}
        }
    });
    setTimeout(ajaxVersion, 30000);
}