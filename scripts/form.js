//form validation

function formValidation() {

    var fname = document.getElementById('fname');
    var email = document.getElementById('email');
    var country = document.getElementById('country');
    var review = document.getElementById('review');

    var alphaExp = /^[a-zA-Z]+$/;
    var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (fname.value.length == 0) {
        document.getElementById('p1').innerText = "* Name cannot be empty *";
        fname.focus();
    }
    else if (!fname.value.match(alphaExp)) {
        document.getElementById('p1').innerText = "* For your name please use alphabets only * ";
        fname.focus();
    }
    else {
        document.getElementById('p1').innerText = "";
        fname.focus();
    }

    if (email.value.length == 0) {
        document.getElementById('p2').innerText = "* Email cannot be empty *";
        email.focus();
    }
    else if (!email.value.match(emailExp)) {
        document.getElementById('p2').innerText = "* Please enter a valid email address * *";
        email.focus();
    }
    else {
        document.getElementById('p2').innerText = "";
        email.focus();
    }

    if (country.selectedIndex == 0) {
        document.getElementById('p3').innerText = "Please Choose any one option";
    }
    else {
        document.getElementById('p3').innerText = "";
        country.focus();
    }

    if (review.value.length == 0) {
        document.getElementById('p4').innerText = " * Please Write your review *";
        review.focus();
    }
    else {
        document.getElementById('p4').innerText = "";
        review.focus();
    }

}


