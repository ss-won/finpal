$(function(){
    'use strict';
    var prev = $('a.pagination__previous');
    
    var page = $('a.pagination__page');

    console.log($(page));

    //page 버튼 클릭했을 때
    $(page).on('click',()=>{
        for(var i=0;i<page.length;i++){
            if($(page[i]).hasClass('active')){
              $(page[i]).removeClass('active')
            }
        }
        $(this).addClass('active');
    })

    

    function prev(){
        //prev 버튼 클릭했을 떄
    $(prev).click(()=>{

        //next 버튼 클릭했을 때
    if($(page[0]).hasClass('active'))
    $(prev).addClass('disable');
        
        

    })
    }

    function next(){
    var next = $('a.pagination__next');
    if($(page[page.length-1]).hasClass('active')){
        $(next).addClass('disable');
          return;
      }
        
    }
    
   
})
