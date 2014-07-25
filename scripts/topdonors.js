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