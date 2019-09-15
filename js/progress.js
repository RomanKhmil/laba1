
var ctx = document.getElementById('loader').getContext("2d");

var gradientFill = ctx.createLinearGradient(0, 500,  0,100);
gradientFill.addColorStop(0, "rgba(198, 32, 186, 0.8)");
gradientFill.addColorStop(1, "rgba(253, 179, 38, 0.8)");





$(document).ready(function() {
	$('#loader').ClassyLoader({

	width: 300,// width of the loader in pixels

	height: 300,// height of the loader in pixels

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
});

console.log($(".loader"));