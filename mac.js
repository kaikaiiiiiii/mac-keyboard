$(document).ready(function(){
	$('.btn').click(function() {
	var altvalue = $(this).children('.altkey').text();
	var shiftaltvalue = $(this).children('.shiftalt').text();
	console.log(altvalue,shiftaltvalue)
	});
})