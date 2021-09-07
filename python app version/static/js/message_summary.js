import {draw_message_analyzation_doughnut_chart,draw_message_analyzation_trend_line_chart} from './charts/message_analyzation.js';
export function default_message_summary(){
    
    $.ajax({
        type: 'GET',
        url: 'https://mongo-analytics-api.herokuapp.com/analytics/total-messages-summary-count/default/default',       //the script to call to get data
        dataType: 'json',          
        beforeSend:function(){
        },
        success: function(data){          //on recieve of reply'
            draw_message_analyzation_doughnut_chart(data);
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
        },
        success: function(data){          //on recieve of reply'
            draw_message_analyzation_trend_line_chart(data);
        },
        error: function(){
         
        },
        complete:function(){
        }
      });
}