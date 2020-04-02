(function($) {
    "use strict";
$(function(){
    $('.timeline').timeline();
    $('.timeline').timeline({
        mode:'horizontal',
        forceVerticalMode: 767,
        visibleItems: 5,
        moveItems:1,
        startIndex:0
    })
    
    
    $('.timeline__content').hover(function(){
        $(this).children('p').addClass('animated fadeInUp');
    },function(){
        $(this).children('p').removeClass('animated fadeInUp');
    })
    
    setInterval(function(){
        $('.timeline__wrap').trigger('click');
    },3000);
    
 

})
})(jQuery);