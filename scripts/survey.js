function calc() {


    var ele = document.getElementsByName('qs1');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            var a1 = parseFloat(ele[i].value);
    }

    var ele1 = document.getElementsByName('qs2');
    for (i = 0; i < ele1.length; i++) {
        if (ele1[i].checked)
            var a2 = parseFloat(ele1[i].value);
    }
    var ele2 = document.getElementsByName('qs3');
    for (i = 0; i < ele2.length; i++) {
        if (ele2[i].checked)
            var a3 = parseFloat(ele2[i].value);
    }
    var ele3 = document.getElementsByName('qs4');
    for (i = 0; i < ele3.length; i++) {
        if (ele3[i].checked)
            var a4 = parseFloat(ele3[i].value);
    }
    var ele4 = document.getElementsByName('qs5');
    for (i = 0; i < ele4.length; i++) {
        if (ele4[i].checked)
            var a5 = parseFloat(ele4[i].value);
    }
    var ele5 = document.getElementsByName('qs6');
    for (i = 0; i < ele5.length; i++) {
        if (ele5[i].checked)
            var a6 = parseFloat(ele5[i].value);
    }
    var ele6 = document.getElementsByName('qs7');
    for (i = 0; i < ele6.length; i++) {
        if (ele6[i].checked)
            var a7 = parseFloat(ele6[i].value);
    }
    var ele7 = document.getElementsByName('qs8');
    for (i = 0; i < ele7.length; i++) {
        if (ele7[i].checked)
            var a8 = parseFloat(ele7[i].value);
    }
    var ele8 = document.getElementsByName('qs9');
    for (i = 0; i < ele8.length; i++) {
        if (ele8[i].checked)
            var a9 = parseFloat(ele8[i].value);
    }
    var ele9 = document.getElementsByName('qs10');
    for (i = 0; i < ele9.length; i++) {
        if (ele9[i].checked)
            var a10 = parseFloat(ele9[i].value);
    }

    var total = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;
    var avg = total / 10;

    document.getElementById("result-text").innerHTML = avg;
    document.getElementById("resultbar").style.width = avg;
    document.getElementsByClassName("result").css.width = avg;
}

$(function() {
    $('.page-2').hide();
    $('.page-3').hide();
    $('#s1').hide();
    $('#next-btn2').hide();
    $('.progressbar').html("0%");
    /*$('.result-container').hide();*/
    $('#result').hide();
    $('#next-btn1').click(function() {
        $('.page-1').hide();
        $('.page-2').show();
        $('#next-btn1').hide();
        $('#next-btn2').show();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('.progressbar').css("width", "33.33%");
        $('.progressbar').html("33.33%");
    });
    $('#next-btn2').click(function() {
        $('.page-1').hide();
        $('.page-2').hide();
        $('.page-3').show();
        $('#next-btn1').hide();
        $('#next-btn2').hide();
        $('#s1').show();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('.progressbar').css("width", "66.66%");
        $('.progressbar').html("66.66%");
    });
    $('#s1').click(function() {
        $(".result-container").show();
        $('.page-3').hide();
        $('#s1').hide();
        $('.survey-container').hide();
        $('.progressbar').css("width", "100%");
        $('.progressbar').html("100%");

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('#result').show();

    });

    $("#stroke").css({ "stroke-dasharray": 60 });

});
