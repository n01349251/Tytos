$(document).ready(function() {

    if ($(document).width() < 768) {
        $('.card3').removeAttr("data-aos", "flip-right");
        $('.card3').attr("data-aos", "fade-right");
        
    } else if ($(document).width() > 768) {
        $('.card3').removeAttr("data-aos", "fade-right");
        $('.card3').attr("data-aos", "flip-right");
    }

});