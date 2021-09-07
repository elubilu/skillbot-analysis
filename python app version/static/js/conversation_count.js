import {draw_user_connection_trend_line_chart} from './charts/user_connection_trend_line_chart.js'
export function default_count_conversation(){
    
    $.ajax({
        type: 'GET',
        url: 'https://mongo-analytics-api.herokuapp.com/analytics/total-conv-count/default/default',       //the script to call to get data
        dataType: 'json',          
        beforeSend:function(){
        },
        success: function(data){             //on recieve of reply
          $('#total-connected-users-count').text(data.conversation_count+' Users');
          $('#total-connected-users-loader').hide();
          $('#total-connected-users').fadeIn();
        },
        error: function(){
          $('#total-connected-users-count').text('Error Occured');
          $('#total-connected-users-loader').hide();
          $('#total-connected-users').fadeIn();
        },
        complete:function(){
        }
      });
}

export function interval_count_conversation(initial_date,final_date,interval_type){

  $.ajax({
    type: 'GET',
    url: `https://mongo-analytics-api.herokuapp.com/analytics/interval-conv-count/${initial_date}/${final_date}/${interval_type}`,       //the script to call to get data
    dataType: 'json',          
    beforeSend:function(){
    },
    success: function(data){             //on recieve of reply
      draw_user_connection_trend_line_chart(data);
    },
    error: function(){
      //$('#total-connected-users-count').text('Error Occured');
      //$('#total-connected-users-loader').hide();
      //$('#total-connected-users').fadeIn();
    },
    complete:function(){
    }
  });
}