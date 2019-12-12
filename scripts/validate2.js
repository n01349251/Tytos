$(document).ready(function() {

    $('#ideaform1').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var idea = $('#idea').val();

        $(".error").remove();

        if (name.length < 1) {
            document.getElementById('name-error').innerText = "Name is required"
        }
        if (idea.length < 1) {
            document.getElementById('idea-error').innerText = "Write Something"
        }
        if (email.length < 1) {
            document.getElementById('email-error').innerText = "Email is required"
        } else {
            var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#email').after('<span class="error">Enter a valid email</span>');
            }
        }
    });

});