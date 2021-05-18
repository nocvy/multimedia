$(function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    prevArrow: '<div class="slide-arrow prev-arrow fa fa-angle-left">',
    nextArrow: '<div class="slide-arrow next-arrow fa fa-angle-right">',
    dotsClass: 'slide-dots',
    });
})