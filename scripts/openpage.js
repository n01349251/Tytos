$(function() {
    $("#wp").click(function() {
        window.location = "./water_pollution.html";
    });
    $("#ap").click(function() {
        window.location = "./air_pollution.html";
    });
    $("#lp").click(function() {
        window.location = "./land_pollution.html";
    });
    $("#sp").click(function() {
        window.location = "./sound_pollution.html";
    });
    $("#lp").click(function() {
        window.location = "./land_pollution.html";
    });
    $("#pp").click(function() {
        window.location = "./plastic_pollution.html";
    });
    $("#ra").click(function() {
        window.location = "./radioactivity.html";
    });
    $("#od").click(function() {
        window.location = "./ozonelayer.html";
    });
    $("#ar").click(function() {
        window.location = "./acid_rain.html";
    });
    $("#gw").click(function() {
        window.location = "./global_warming.html";
    });
    $("#cc").click(function() {
        window.location = "./climate_change.html";
    });
    $("#df").click(function() {
        window.location = "./deforastration.html";
    });
    $("#mg").click(function() {
        window.location = "./meltigofglacier.html";
    });
    $(".col-sm-2").hover(function() {
            $(this).addClass('scale');
        },
        function() {
            $(this).removeClass('scale');
        })
})