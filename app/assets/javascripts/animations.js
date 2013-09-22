// Controls FOUC prevention (wait) and site menu trigger
$(function(){
    $('.wait').delay('slow').removeClass('wait');

    $('a.open_sesame').click(function(){
        $('.menu').fadeIn();
    });
    $('a.shut_yo_mouth').click(function(){
        $('.menu').fadeOut();
    });
});