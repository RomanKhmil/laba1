var ctx = $('#myChart');
var sctx = $('#secondChart');




var ctx = document.getElementById('myChart').getContext("2d");

var sctx = document.getElementById('secondChart').getContext("2d");


var gradientFill = ctx.createLinearGradient(0, 500,  0,100);
gradientFill.addColorStop(0, "rgba(198, 32, 186, 0.8");
gradientFill.addColorStop(1, "rgba(253, 179, 38, 0.8)");



var gradientFill2 = ctx.createLinearGradient(0, 500,  0,100);
gradientFill2.addColorStop(0, "rgba(39, 126, 204, 0.8)");
gradientFill2.addColorStop(1, "rgba(0, 222, 255, 0.8)");







var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            //label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:  gradientFill,
            borderColor:     'rgba(236, 240, 241,0.8)',
            borderWidth: 3,
            radius: 10,
             //hover
            pointHoverRadius: 10,
            pointHoverBorderWidth: 3,

         },{
            //label: '# of Votes',
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
        legend: {
        display: false
    },
    scales: {
        ticks: {
            display: false
         },
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
var secondChart = new Chart(sctx,{
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options:{

    }
});