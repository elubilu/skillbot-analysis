export function scrollTo(jQueryElem){
    var x = jQueryElem.offset();
    $('html,body').animate({scrollTop: x.top},1500);
}