$(function(){

    $('.block-intro-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false
    });

    $('.block-slider').slick({
        infinite: true,
        arrows: true
    });

    $('.team-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });


});
