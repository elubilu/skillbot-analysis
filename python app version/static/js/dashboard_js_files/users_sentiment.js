export function default_user_sentiment_count(){
    
    $.ajax({
        type: 'GET',
        url: 'https://mongo-analytics-api.herokuapp.com/analytics/sentiment-counts',       //the script to call to get data
        dataType: 'json',          
        beforeSend:function(){
        },
        success: function(data){   
            //happy users card body
          $('#happy-users-count').text(data.happy_user);
          $('#happy-users-loader').hide();
          $('#happy-users').fadeIn();

          //unhappy users card body
          $('#unhappy-users-count').text(data.unhappy_user);
          $('#unhappy-users-loader').hide();
          $('#unhappy-users').fadeIn();
        },
        error: function(){
           alert('Some error occured while loading user sentiments data');
        },
        complete:function(){
        }
      });
}

export function interval_user_sentiment_count(initial_date,final_date,interval_type){

}