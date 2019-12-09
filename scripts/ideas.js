$(function() {


    var people = [];

    $.getJSON('./scripts/people.json', function(data) {
        $.each(data.person, function(i, f) {
            var tblRow =
                "<div>" +
                "<span1>" + "<img src=" + f.img + ">" +
                "<h4>" + f.name + "</h4>" + "</span1>" +
                "<span2>" +
                "<h5>" + f.email + "</h5>" +
                "<idea>" + f.idea + "</idea>" + "</span2>" +
                "</div>" +
                "<hr>"
            $(tblRow).appendTo("#userdata tbody");
        });

    });

});
