
var ctx = document.getElementById('loader').getContext("2d");

	var gradientFill = ctx.createLinearGradient(0, 250,  0,100);
		gradientFill.addColorStop(0, "rgba(83, 132, 176, 1)");
		gradientFill.addColorStop(1, "rgba(88, 202, 74, 1)");



var ctxx = document.getElementById('loaderr').getContext("2d");

	var gradientFilll = ctxx.createLinearGradient(0, 250,  0,100);

	gradientFilll.addColorStop(0, "rgba(254, 5, 135, 1)");
	gradientFilll.addColorStop(1, "rgba(255, 158, 8, 1)");

var ctxxx = document.getElementById('loaderrr').getContext("2d");

	var gradientFillll = ctxxx.createLinearGradient(0, 250,  0,100);
		gradientFillll.addColorStop(0, "rgba(38, 126, 205, 1)");
		gradientFillll.addColorStop(1, "rgba(8, 201, 244, 1)");



$(document).ready(function() {
	$('#loader').ClassyLoader({

		width: 400,// width of the loader in pixels

		height: 400,// height of the loader in pixels

		animate:true,// whether to animate the loader or not

		displayOnLoad:true,

		percentage: 80,// percent of the value, between 0 and 100

		speed: 1,// miliseconds between animation cycles, lower value is faster

		roundedLine:true,// whether the line is rounded, in pixels

		showRemaining:true,// how the remaining percentage (100% - percentage)

		fontFamily:'Helvetica',// name of the font for the percentage

		fontSize:'50px',// size of the percentage font, in pixels

		showText:true,// whether to display the percentage text

		diameter: 120,// diameter of the circle, in pixels

		fontColor:'rgba(25, 25, 25, 0.6)',// color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla

		lineColor:gradientFill,// line color of the main circle

		remainingLineColor:'rgba(55, 55, 55, 0.4)',// line color of the remaining percentage (if showRemaining is true)

		lineWidth: 25// the width of the circle line in pixels
	});
	$('#loaderr').ClassyLoader({
		width: 400,// width of the loader in pixels

		height: 400,// height of the loader in pixels

		animate:true,// whether to animate the loader or not

		displayOnLoad:true,

		percentage: 80,// percent of the value, between 0 and 100

		speed: 1,// miliseconds between animation cycles, lower value is faster

		roundedLine:true,// whether the line is rounded, in pixels

		showRemaining:true,// how the remaining percentage (100% - percentage)

		fontFamily:'Helvetica',// name of the font for the percentage

		fontSize:'50px',// size of the percentage font, in pixels

		showText:true,// whether to display the percentage text

		diameter: 120,// diameter of the circle, in pixels

		fontColor:'rgba(25, 25, 25, 0.6)',// color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla

		lineColor:gradientFilll,// line color of the main circle

		remainingLineColor:'rgba(55, 55, 55, 0.1)',// line color of the remaining percentage (if showRemaining is true)

		lineWidth: 35// the width of the circle line in pixels
	});

	$('#loaderrr').ClassyLoader({

		width: 400,// width of the loader in pixels

		height: 400,// height of the loader in pixels

		animate:true,// whether to animate the loader or not

		displayOnLoad:true,

		percentage: 80,// percent of the value, between 0 and 100

		speed: 1,// miliseconds between animation cycles, lower value is faster

		roundedLine:true,// whether the line is rounded, in pixels

		showRemaining:true,// how the remaining percentage (100% - percentage)

		fontFamily:'Helvetica',// name of the font for the percentage

		fontSize:'50px',// size of the percentage font, in pixels

		showText:true,// whether to display the percentage text

		diameter: 120,// diameter of the circle, in pixels

		fontColor:'rgba(25, 25, 25, 0.6)',// color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla

		lineColor:gradientFillll,// line color of the main circle

		remainingLineColor:'rgba(55, 55, 55, 0.4)',// line color of the remaining percentage (if showRemaining is true)

		lineWidth: 25// the width of the circle line in pixels
	});

});


//console.log($(".loader"));