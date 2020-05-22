$(document).ready(function(){

    $('.main__slider').slick({
        infinite: true,
        dots: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<div class="main__paging"></div>';
            },
    });

    $('.solutions__slider').slick({
        infinite: true,
        dots: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/solutions_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/solutions_right.svg"></button>',
        customPaging: function(slider, i) {
            var tittle = $(slider.$slides[i]).data('slidertitle');
            return '<a>' + tittle + '</a>';
        },
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});


/* menu for mobile */
window.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        ham = document.querySelector('.ham'),
        body = document.getElementsByTagName("body")[0];

    ham.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        body.classList.toggle('body_hidden');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
        })
    })
})