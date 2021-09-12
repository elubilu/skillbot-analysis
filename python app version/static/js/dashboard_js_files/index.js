import {default_count_conversation,interval_count_conversation} from './conversation_count.js';
import {default_interactive_session_count,interval_interactive_session_count} from './interactive_session.js';
import {default_message_summary,message_summary_custom_dates,interval_message_summary} from './message_summary.js';
import {default_user_sentiment_count,interval_user_sentiment_count} from './users_sentiment.js';
import {default_popular_intents_load} from './popular_intents.js';
import {scrollTo} from './scrollTo.js';
import {displayModal} from './input_date_modal.js';

$(function(){

  var endpoint_index;
  var interval;

  const API_REFERENCE=[
    {
      endpoint:'https://mongo-analytics-api.herokuapp.com/analytics/interval-conv-count/'
    },{
      endpoint:'https://mongo-analytics-api.herokuapp.com/analytics/total-messages-summary-count/'
    },{
      endpoint:'https://mongo-analytics-api.herokuapp.com/analytics/interval-messages-summary-count/'
    },{
      endpoint: ' https://mongo-analytics-api.herokuapp.com/analytics/interval-popular-intents/'
    }
  ];
    
    //function for implementing sliding effect when link on the side bar is clicked
    $(document).on('click','.scroller',function(e){
        var targetID=$(this).attr('data-target');
        var targetElement=$('#'+targetID);
        scrollTo(targetElement);
      });


      $(document).on('click','#btn-confirm-dates',function(e){
        var initial_date=$('#initial-date').val();
        var final_date=$('#final-date').val();
        
        if (initial_date=="" || final_date==""){
            return;
        }

        switch(endpoint_index){
          case 0:
            $('#user-connection-trend-header').text(interval+' - From '+initial_date+' To '+final_date);
            interval_count_conversation(initial_date,final_date,interval);
            break;
          case 1:
            $('#message-analyzation-pie-chart-header').text(' From '+initial_date+' To '+final_date);
            message_summary_custom_dates(initial_date,final_date);
            break;
          case 2:
            $('#message-analyzation-line-chart-header').text(interval+' - From '+initial_date+' To '+final_date);
            interval_message_summary(initial_date,final_date,interval);
            break;
          case 3:
            $('#popular-intent-list-header').text(' From '+initial_date+' To '+final_date);
            default_popular_intents_load(initial_date,final_date);
            break;
        }

      });

      //event handler for conversation trend line chart interval selector
      $(document).on('click','.trend-conversation',function(e){
        endpoint_index=0;
        interval=$(this).text();
        displayModal('User Connection Trend',interval);
      });


      //event handler for message-analysation summary pie-chart interval selector
      $(document).on('click','.pie-chart-msg-summary',function(e){
        endpoint_index=1;
        displayModal('Message Identification Summary','');
      });

      //event handler for Message analyzation trend line chart interval selector
      $(document).on('click','.trend-msg-analysis',function(e){
        endpoint_index=2;
        interval=$(this).text();
        displayModal('Message Identification Trend',interval);
      });

      //event handler for popular intents interval selector
      $(document).on('click','.list-intent',function(e){
        endpoint_index=3;
        displayModal('Popular Intents List ','');
      });



    //default metrics giving aggregating data from the beginning till the present date
    default_count_conversation();
    default_interactive_session_count();
    default_user_sentiment_count();
    default_message_summary();
    default_popular_intents_load('default','default');
    
    //calculate today's date and subtract 1 week from it to get one week old date
    const initial_date=moment().subtract(10, 'days').format('YYYY-MM-DD');
    const final_date=moment().subtract(1, 'days').format('YYYY-MM-DD');

    interval_count_conversation(initial_date,final_date,'default');
    interval_message_summary(initial_date,final_date,'default');
    
    
});