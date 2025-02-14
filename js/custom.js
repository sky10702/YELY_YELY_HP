$(function () {

    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1300,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    })

    $(function () {
        $('.main_content .best_tab_menu button').on('click', function () {
            let idx = $(this).parent().index();
            $('.main_content .best_tab_menu button').removeClass('on');
            $(this).addClass('on');
            $('.main_content .best_tab_content .con').removeClass('on');
            $('.main_content .best_tab_content .con').eq(idx).addClass('on')
        })
    })

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on')
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }

    });

    $(window).on('resize', function () {
        $('.header .mopen').removeClass('on');
        $('.header .gnb').removeClass('on');
        $('.header .gnb>ul ul').removeAttr('style')
    })

    $('.header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })


});

$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            769: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });

    const MAINEVENTSLIDE = new Swiper('.main_event_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.main_event .arrows .next',
            prevEl: '.main_event .arrows .prev',
        },

        breakpoints: {

            769: {
                slidesPerView: 4,
                spaceBetween: 30,
            },

        },
    });
});


$(function () {
    AOS.init();
})

$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });


});
