export function default_interactive_session_count(){
    $.ajax({
        type: 'GET',
        url: 'https://mongo-analytics-api.herokuapp.com/analytics/overall-interactive-sessions-summary/default/default',       //the script to call to get data
        dataType: 'json',          
        beforeSend:function(){
        },
        success: function(data){             //on recieve of reply
          $('#average-session-time-value').text((data.avg_session/60).toFixed(2)+' Minutes');
          $('#average-session-time-loader').hide();
          $('#average-session-time').fadeIn();
        },
        error: function(){
            $('#average-session-time-value').text('Error Occured');
            $('#average-session-time-loader').hide();
            $('#average-session-time').fadeIn();
        },
        complete:function(){
        }
      });
}

export function interval_interactive_session_count(initial_date,final_date,interval_type){

}