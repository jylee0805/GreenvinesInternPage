$(document).ready(function(){
    
    $('.showmenu').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });

    
    $('.btn1').click(function(){
        $('.dt1').slideToggle(500);
        $('features').toggleClass('features-show');
    });
    $('.btn2').click(function(){
        $('.dt2').slideToggle(500);
    });
    $('.btn3').click(function(){
        $('.dt3').slideToggle(500);
    });
    $('.btn4').click(function(){
        $('.dt4').slideToggle(500);
    });
});