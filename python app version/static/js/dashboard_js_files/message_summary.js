import {draw_message_analyzation_doughnut_chart,draw_message_analyzation_trend_line_chart} from './charts/message_analyzation.js';
export function default_message_summary(){
    
    $.ajax({
        type: 'GET',
        url: 'https://mongo-analytics-api.herokuapp.com/analytics/total-messages-summary-count/default/default',       //the script to call to get data
        dataType: 'json',          
        beforeSend:function(){
            $('#message-analyzation-pie-chart-data-loader').show();
            $('#message-analyzation-pie-chart-notice').hide();
        },
        success: function(data){
            $('#message-analyzation-pie-chart-notice').hide();
            if (data.hasOwnProperty('error')){
                $('#message-analyzation-pie-chart-notice').text(data.error);
                $('#message-analyzation-pie-chart-notice').show();
                return;
            }          //on recieve of reply'
            $('#message-analyzation-pie-chart-data-loader').hide();
            draw_message_analyzation_doughnut_chart(data);
            $('#message-analyzation-pie-chart').show();
        },
        error: function(){
         
        },
        complete:function(){
        }
      });
}

export function message_summary_custom_dates(initial_date,final_date){
    
    $.ajax({
        type: 'GET',
        url: `https://mongo-analytics-api.herokuapp.com/analytics/total-messages-summary-count/${initial_date}/${final_date}`,       //the script to call to get data
        dataType: 'json',          
        beforeSend:function(){
            $('#message-analyzation-pie-chart-data-loader').show();
            $('#message-analyzation-pie-chart-notice').hide();
        },
        success: function(data){          //on recieve of reply'
            $('#message-analyzation-pie-chart-notice').hide();
            if (data.hasOwnProperty('error')){
                $('#message-analyzation-pie-chart-notice').text(data.error);
                $('#message-analyzation-pie-chart-notice').show();
                return;
            }          //on recieve of reply'
            $('#message-analyzation-pie-chart-data-loader').hide();
            draw_message_analyzation_doughnut_chart(data);
            $('#message-analyzation-pie-chart').show();
        },
        error: function(){
         
        },
        complete:function(){
        }
      });
}
export function interval_message_summary(initial_date,final_date,interval_type){

    $.ajax({
        type: 'GET',
        url: `https://mongo-analytics-api.herokuapp.com/analytics/interval-messages-summary-count/${initial_date}/${final_date}/${interval_type}`,       //the script to call to get data
        dataType: 'json',          
        beforeSend:function(){
            $('#message-analyzation-trend-line-chart').hide();
            $('#message-analyzation-trend-line-chart-notice').hide();
            $('#message-analyzation-trend-line-chart-data-loader').show();
        },
        success: function(data){       //on recieve of reply'
            $('#message-analyzation-trend-line-chart-data-loader').hide();
            $('#message-analyzation-trend-line-chart-notice').hide();
            if (data.hasOwnProperty('error')){
                $('#message-analyzation-trend-line-chart-notice').text(data.error);
                $('#message-analyzation-trend-line-chart-notice').show();
                return;
            }
            draw_message_analyzation_trend_line_chart(data);
            $('#message-analyzation-trend-line-chart').show();
        },
        error: function(){
         
        },
        complete:function(){
        }
      });
}