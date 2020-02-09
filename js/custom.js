$(document).ready(function(){
    $('ul.theme-colors li').click(function(){
        $('body').css('background',$(this).css('color'));
    });

    $('ul.logo-colors li').click(function(){
        var theme = $(this).css('background-color');
        $('#leafs div').css('background', theme);
        $('h1,h2 span,h2').css('color'. theme);
    });

    $('p.themes-btn').click(function(){
        $('.colors').toggleClass('active');

    });

});