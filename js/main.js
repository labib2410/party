/// <reference types="../@types/jquery" />
$('.head-1').on("click", function () {
    $('.para-1').slideToggle(1000); // Toggle the paragraph
});
$('.head-2').on("click", function () {
    $('.para-2').slideToggle(1000); // Toggle the paragraph
});
$('.head-3').on("click", function () {
    $('.para-3').slideToggle(1000); // Toggle the paragraph
});
$('.head-4').on("click", function () {
    $('.para-4').slideToggle(1000); // Toggle the paragraph
});
const countdownDate = new Date("December 31, 2024 23:59:59").getTime();
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);

    
    if (distance < 0) {
        clearInterval(x);
        $("#timer").text("The event has started!");
    }
}, 1000);