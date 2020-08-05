import $ from 'jquery';
import slick from 'slick-carousel';

$(window).on('load', function () {
    $('#js-customer-feedback-slider').slick({
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        arrows: false,
        speed: 500,
        fade: true,
        dots: true
    })
});
