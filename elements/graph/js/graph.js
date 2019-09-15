var ctx = $('#myChart');
var sctx = $('#secondChart');




var ctx = document.getElementById('myChart').getContext("2d");

var gradientFill = ctx.createLinearGradient(0, 500,  0,100);
gradientFill.addColorStop(0, "rgba(198, 32, 186, 0.8");
gradientFill.addColorStop(1, "rgba(253, 179, 38, 0.8)");



var gradientFill2 = ctx.createLinearGradient(0, 500,  0,100);
gradientFill2.addColorStop(0, "rgba(39, 126, 204, 0.8)");
gradientFill2.addColorStop(1, "rgba(0, 222, 255, 0.8)");



Chart.plugins.register({
  beforeDraw: function(chartInstance, easing) {
    var highlightRanges = chartInstance.data.highlightRanges; //chart.config.data.highlightRanges;

    // If the object exists.
    if (highlightRanges !== undefined && highlightRanges != null && highlightRanges.length > 0) {
      var chartCtx = chartInstance.chart.ctx;
      chartCtx.save();
      for (var hRange in highlightRanges) {

        var yRangeBegin = highlightRanges[hRange].begin;
        var yRangeEnd = highlightRanges[hRange].end;
        var yRangeColour = highlightRanges[hRange].colour;

        var xaxis = chartInstance.scales['x-axis-0'];
        var yaxis = chartInstance.scales['y-axis-0'];

        var yRangeBeginPixel = yaxis.getPixelForValue(yRangeBegin);
        var yRangeEndPixel = yaxis.getPixelForValue(yRangeEnd);

        // The fill style of the rectangle we are about to fill.
        chartCtx.fillStyle = yRangeColour; //'rgba(0, 255, 0, 0.3)';
       
        // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
        // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
        chartCtx.fillRect(xaxis.left, Math.min(yRangeBeginPixel, yRangeEndPixel), xaxis.right - xaxis.left, Math.max(yRangeBeginPixel, yRangeEndPixel) - Math.min(yRangeBeginPixel, yRangeEndPixel));
      }
      chartCtx.restore();
    }
  }
});








var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:  gradientFill,
            borderColor:     'rgba(236, 240, 241,0.8)',
            borderWidth: 3,
            radius: 10,
             //hover
            pointHoverRadius: 10,
            pointHoverBorderWidth: 3,

         },{
            label: '# of Votes',
            data: [5, 19, 20, 5, 3, 3],
            backgroundColor: gradientFill2,
            borderColor:      'rgba(236, 240, 241,0.8)',



           //hover
            pointHoverRadius: 0,
            pointHoverBorderWidth: 3,
            //!hover
            radius: 0,
            borderWidth: 3
        }]
        
    },
    options: {
    scales: {
        // The following will affect the vertical lines (xAxe) of your dataset
        xAxes: [{
            gridLines: {
                // You can change the color, the dash effect, the main axe color, etc.
                borderDash: [8, 4],
                lineWidth: 3,
                color: "rgba(0,255,255, 1)"

           }
        }],

        // And this will affect the horizontal lines (yAxe) of your dataset
        yAxes: [{
            gridLines: {
                borderDash: [10, 5],
                color: "rgba(0,255,255, 1)"
            }
        }]
    }
}
    
});



















