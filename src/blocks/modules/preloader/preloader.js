import $ from 'jquery';

const $preloader = $('#preloader');
const windowHeight = $(window).height();

$preloader.css('height', `${windowHeight}px`);

$(window).on('load', function () {
    // Delay for safety net
    setTimeout(function () {
        $preloader.removeClass('preloader_active');
        $('body').css('overflow-y', 'auto');
    }, 800);
});
