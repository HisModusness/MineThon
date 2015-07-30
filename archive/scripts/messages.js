// DONT CHANGE ANY LINES THAT ARENT COMMENTED

var terms = [
"STEVEB says: YEEAAAAAAHHHHHHHHHH WOOOOOOOHHHHHHH", 
"It's 10:00 or something", 
"we've earned $texas", 
"<img src=images/ethan.png />",
]; //array of terms to rotate, add string on new line and end with comma

function rotateTerm() {
	var ct = $("#rotate").data("term") || 0;
	$("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1)
		.html(terms[ct])
		.fadeIn()
		.delay(2000)				// How long each message should show
		.fadeOut(200, rotateTerm);	// The number is how long it takes to fade through white
}

$(document).ready(function() {
	rotateTerm();
});
