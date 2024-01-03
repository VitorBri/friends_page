$(document).ready(function(){

    $(".header__nav__mobile").click(function () {
        $('.header__nav__itens').slideToggle();
    });
    
    $('.carousel__images').slick({
        autoplay:true,
        prevArrow: 'null',
        nextArrow: 'null'
    });


    $('.characters__cards').slick({
        centerMode: true,
        centerPadding: 'null',
        slidesToShow: 3,
            responsive: [
                {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
                },
            ]
    })

    responsiveResolu();

    $(window).resize(function () {
        responsiveResolu();
    });

    function responsiveResolu () {
        var screenWidth = $(window).width();
        
        if (screenWidth <= 1023) {

            $('.characters__cards').off('beforeChange');
            $('.characters__cards').off('afterChange');
            $('.slick-center').css('transform', 'scale(1)');
            
            $('.header__nav__itens').hide();

        } else {

            $('.characters__cards').on('init beforeChange', function(event, slick, currentSlide, nextSlide){
                $('.slick-center').css('transform', 'scale(1)');
            });
            
            $('.characters__cards').on('afterChange', function(event, slick, currentSlide){
                $('.slick-center').css('transform', 'scale(1.2)');
            });

            $('.slick-center').css('transform', 'scale(1.2)');

            $('.header__nav__itens').show();
        }
    }
    




    $('nav a').on('click', function(e) {
        e.preventDefault();

        var targetSectionId = $(this).attr('href').substring(1);
        var targetSection = $('#' + targetSectionId);

        var headerHeight = $('header').outerHeight();

        var windowHeight = $(window).height();

        var sectionHeight = targetSection.outerHeight();

        var scrollToPosition = targetSection.offset().top - headerHeight;

        if (sectionHeight < windowHeight) {
            scrollToPosition -= (windowHeight - sectionHeight) / 2;
        }

        $('html, body').animate({
            scrollTop: scrollToPosition
        }, 500);
    });

})
