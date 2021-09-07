export function default_popular_intents_load(){

    $.ajax({
      type: 'GET',
      url: `https://mongo-analytics-api.herokuapp.com/analytics/overall-popular-intents/default/default`,       //the script to call to get data
      dataType: 'json',          
      beforeSend:function(){
      },
      success: function(data){
        $('#popular-intents-loader').hide();
          if (data.popular_intents.length!=0){
              data.popular_intents.forEach(element=>{
                $('#popular-intent-list-card').append(`<h4 class="small font-weight-bold">${element.intent} <span
                class="float-right">${element.occurence} times</span></h4>`);
              });
          }
          else{
            $('#popular-intent-list-card').append(`<h4 class="small font-weight-bold">Sorry, data to show.</h4>`);      
          }
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