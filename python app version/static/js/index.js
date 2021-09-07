import {default_count_conversation,interval_count_conversation} from './conversation_count.js';
import {default_interactive_session_count,interval_interactive_session_count} from './interactive_session.js';
import {default_message_summary,interval_message_summary} from './message_summary.js';
import {default_user_sentiment_count,interval_user_sentiment_count} from './users_sentiment.js';
import {default_popular_intents_load} from './popular_intents.js';

$(function(){
    default_count_conversation();
    default_interactive_session_count();
    default_user_sentiment_count();
    default_message_summary();
    default_popular_intents_load();
    
    //calculate today's date and subtract 1 week from it to get one week old date
    //const initial_date=moment().subtract(60, 'days').format('YYYY-MM-DD');
    //const final_date=moment().format('YYYY-MM-DD');

    interval_count_conversation('default','default','default');
    interval_message_summary('default','default','default');
    
    
});