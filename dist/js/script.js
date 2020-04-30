$(document).ready(function(){

    $('.main_slider').slick({
        infinite: true,
        dots: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<div class="main_slider__paging"></div>';
            },
    });

});