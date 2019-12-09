// Set the date we're counting down to
var deadline = new Date("Dec 31, 2020 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var t = deadline - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    // If the count down is finished, write some text
    if (t < 0) {
        clearInterval(x);

        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
        document.getElementById("timer").innerHTML = "Its Time to Stay Away Single Use Plastic! Hoorayyy!";
    }
}, 1000);






