// The site menu trigger
$(function(){
    $('a.open_sesame').click(function(){
        $('.menu').fadeIn();
    });
    $('a.shut_yo_mouth').click(function(){
        $('.menu').fadeOut();
    });
});