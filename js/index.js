console.log("index is loaded baby");

$('.breakBar').on("click", function() {
    console.log("you clika the guy");
});

$(window).scroll(function() {
    console.log("scrolly");
});

$('#aboutpic').on("click", function() {
    console.log("clicking pfp");
});

$(function() {
    var bar1 = $(".breakBar");
    var bar1height = bar1.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if ( scroll >= ( bar1height - windowHeight )) {
            bar1.addClass("animEnter");
        }
    });
});