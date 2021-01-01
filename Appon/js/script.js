$(function () {
    // Menu Fix
    var navoff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    // Banner Slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        dots: true,
        speed: 3000,
    });

    // awesome features
    $('.featurs_menu ul li').click(function () {
        $('.featurs_menu ul li').removeClass('active');
    });

    // Screenshort Slider
    $('.screenshot_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 2000,

    });
    //    $('.screenshot_slider').slick({
    //        slidesToShow: 5,
    //        slidesToScroll: 1,
    //        centerPadding: 0,
    //        dots: true,
    //        centerMode: true,
    //        arrows: false,
    //    });

    // Vedio js 
    $('.venobox').venobox({
        share: ['facebook', 'download']
    });
    // Banner Slider
    $('.team_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 574,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    // User Slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });

    // Wow js 
    new WOW().init();


    //Smooth Js 
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
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
                        }
                    });
                }
            }
        });
    //Back To Top js
    $(window).scroll(function () {
        var btn_fade = $(this).scrollTop();

        if (btn_fade > 900) {
            $('.btp').fadeIn();
        } else {
            $('.btp').fadeOut();
        }
    });
    $('.btp').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });

});
