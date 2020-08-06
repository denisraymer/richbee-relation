import $ from 'jquery';
import Parallax from 'parallax-js';
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
    });
});

const scene = $('#parallax-scene').get(0);
const parallaxInstance = new Parallax(scene, {
    relativeInput: true
});
