$(function () {
    'use strict';

    // Menu fix part
    var navoff = $('.main_menu').offset().top;
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });

    // Smooth Scroll js 
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    // Slider part 
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
    });


    // video js start
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#e23e38',
        share: false,
    });

    // Team Slider 
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Testimonial Slider 
    $('.text_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //Counter js start
    $('.counter').counterUp({
        delay: 50,
        time: 1000,
    });

    // Client Logo part
    $('.client_logo').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // Back to top button js

    $(window).on('scroll', function () {
        var btn_fade = $(this).scrollTop();
        
        if(btn_fade > 150){
           $('.btp').fadeIn();
           }
        else{
            $('.btp').fadeOut();
        }
    });
    
    $('.btp').on('click', function(){
        $('html,body').animate({
            scrollTop: 0,
            speed: 2000,
        },2000);
    });
    
});
