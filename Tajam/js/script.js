$(function () {
    // Slider Start
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        cssEase: 'linear',
    });
    // Text slide
    $('.text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        cssEase: 'linear',
    });
    // Veno box Start
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#00e0d0',
        closeColor: '#ff3b3b',
        closeBackground: '#362f58',
    });
    // Filter js start
    var containerEl = document.querySelector('.mix_item');

    var mixer = mixitup(containerEl);
    

    // Meny Fix
    var navoff = $('.header_container').offset().down;
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling> navoff){
            $('header_container').addClass('menu_fix')
           }
        else{
            $('header_container').removeClass('menu_fix')
        }
    });
    
    // wow js start
    new WOW().init();
    
    
    // Back to top button js
    $(window).scroll(function(){
        var btn_jq = $(this).scrollTop();
        
        if(btn_jq > 200){
           $('.btp').fadeIn();
           }
        else{
            $('.btp').fadeOut();
        }
    });
    
    $('.btp').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });
    
});

    // Form validation
    
//    var names = document.getElementById('name');
//    var names_err = document.getElementById('name_err');
//    
//    function form_valid(){
//        if(name.value == ''){
//       names_err.innerHTML = 'What Your name
//       }
//    };







