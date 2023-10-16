$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#scrolltotop").fadeIn();
        } else {
            $("#scrolltotop").fadeOut();
        }
    });
    $("#scrolltotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
    });
});