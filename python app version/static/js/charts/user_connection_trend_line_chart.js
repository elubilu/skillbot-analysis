export function draw_user_connection_trend_line_chart(dataset){

var labels=[];
var data=[];

if(dataset.length!=0){
    dataset.forEach(element => {
        labels.push(element.initial_date);
        data.push(element.conversation_count);
    });
}

Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var context = document.getElementById("user-connection-trend-line-chart");

var  chart= new Chart(context, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: "Total New User",
        lineTension: 0.1,
        backgroundColor: "rgba(159, 181, 165, 0.05)",
        borderColor: "rgba(159, 181, 165, 1)",
        pointRadius: 2,
        pointBackgroundColor: "rgba(159, 181, 165, 1)",
        pointBorderColor: "rgba(159, 181, 165, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(159, 181, 165, 1)",
        pointHoverBorderColor: "rgba(159, 181, 165, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: data,
      }],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10
      }
    }
  });

}