var message_analyzation_pie_chart,message_analyzation_line_chart;
export function draw_message_analyzation_doughnut_chart(dataset){

    var labels=['Identified messages','Unidentified messages'];
    var data= [dataset.identified_message_count,dataset.unidentified_message_count]

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

if(message_analyzation_pie_chart){
  message_analyzation_pie_chart.destroy();
}
// Pie Chart Example
var context = document.getElementById("message-analyzation-pie-chart");
message_analyzation_pie_chart = new Chart(context, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: ['#4e73df', '#1cc88a'],
      hoverBackgroundColor: ['#2e59d9', '#17a673'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
     
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 30,
  },
});

}

export function draw_message_analyzation_trend_line_chart(dataset,interval_type){

var labels=[];
var data_identified_messages=[];
var data_unidentified_messages=[];

if(dataset.length!=0){
  if(interval_type=='Monthly'){
    dataset.forEach(element => {
      data_identified_messages.push(element.identified_message_count);
      data_unidentified_messages.push(element.unidentified_message_count);
      labels.push(moment(element.initial_date).format("MMM,YYYY"));
  });
  }
  else{
    dataset.forEach(element => {
      data_identified_messages.push(element.identified_message_count);
      data_unidentified_messages.push(element.unidentified_message_count);
      labels.push(element.final_date);
  });
  }
}

Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var context = document.getElementById("message-analyzation-trend-line-chart");
if (message_analyzation_line_chart){
  message_analyzation_line_chart.destroy();
}
message_analyzation_line_chart= new Chart(context, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: "Identified Messages",
        lineTension: 0.1,
        backgroundColor: "rgba(125, 245, 158, 0.05)",
        borderColor: "rgba(125, 245, 158, 1)",
        pointRadius: 2,
        pointBackgroundColor: "rgba(125, 245, 158, 1)",
        pointBorderColor: "rgba(125, 245, 158, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(125, 245, 158, 1)",
        pointHoverBorderColor: "rgba(125, 245, 158, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: data_identified_messages,
      },
      {
        label: "Unidentified Messages",
        lineTension: 0.1,
        backgroundColor: "rgba(245, 131, 105, 0.05)",
        borderColor: "rgba(245, 131, 105, 1)",
        pointRadius: 2,
        pointBackgroundColor: "rgba(245, 131, 105, 1)",
        pointBorderColor: "rgba(245, 131, 105, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(245, 131, 105, 1)",
        pointHoverBorderColor: "rgba(245, 131, 105, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: data_unidentified_messages,
      }
    ],
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
        display: true
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

