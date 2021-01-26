$(function () {
    'use strict';
//adjust slider height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(winH - (upperH + navH));

    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .row .col-lg-3').css('opacity','0.09'); 
                    } else {
            $(".shuffle-imgs .row .col-lg-3").css('opacity','0.05');
            $($(this).data('class')).parent().css('opacity','1');
        }
    });

});