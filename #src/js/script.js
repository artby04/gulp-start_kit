@@include('jquery.min.js')
@@include('slick.min.js')


$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        variableWidth: true,
        variableHeight: true
    });
});