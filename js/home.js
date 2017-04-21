document.getElementById("advance").addEventListener("click", myFunction);

function myFunction() {
    window.location.href = 'landing.html';
};

$('.count').each(function () {
    $(this).prop('Counter',14845000).animate({
        Counter: $(this).text()
    }, {
        duration: 120000000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
