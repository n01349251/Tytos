$(document).ready(function() {

    $('#signin-form').submit(function(e) {
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        $(".error").remove();


        if (email.length < 1) {

            document.getElementById('email-error').innerText = "Email is required"
        } else {
            var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('email-error').after('<span class="error">Enter a valid email</span>');
            }
        }
        if (password.length < 8) {
            document.getElementById('password-error').innerText = "Password is required"
        }

    });

});