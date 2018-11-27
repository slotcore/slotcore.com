///*---------------------------------
//    OCULTAR Y MOSTRAR BOTON IR ARRIBA
// ----------------------------------*/
//$(function () {
//    $(window).scroll(function () {
//        var scrolltop = $(this).scrollTop();
//        if (scrolltop >= 50) {
//            $(".ir-arriba").fadeIn();
//        } else {
//            $(".ir-arriba").fadeOut();
//        }
//    });
//
//});


/*----------------------------------
Iniciamos smoothScroll
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels

});


/*----------------------------------
Iniciamos WOW
--------------------------------*/
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();



$(window).scroll(function () {
    // grosor de menu
    var nav = $('#menu');
    var bar = $('#bar-contact');
    var position_bar = bar.position();
    var top_position = position_bar.top + bar.height();

    //console.log("left: " + position_bar.left + ", top: " + position_bar.top + ", height: " + bar.height())

    var scroll = $(window).scrollTop();

    /*---------------------------------
        OCULTAR Y MOSTRAR BOTON IR ARRIBA
     ----------------------------------*/
    if (scroll >= top_position + 50) {
        $(".ir-arriba").fadeIn();
    } else {
        $(".ir-arriba").fadeOut();
    }
    /*---------------------------------
        CABECERA FIJA
     ----------------------------------*/
    if (scroll >= top_position) {
        nav.addClass("fixed-top");
        $('#index').addClass("index-margin");
    } else {
        nav.removeClass("fixed-top");
        $('#index').removeClass("index-margin");
    }
    /*---------------------------------
       CABECERA ANIMADA
     ----------------------------------*/
    if (scroll >= top_position + 40) {
        nav.addClass("cabecera-scroll");
    } else {
        nav.removeClass("cabecera-scroll");
    }
});
