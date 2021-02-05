"use strict;"

// show/hide answers
    // let button = $(".answerButton");
    // let buttonHandler = function(e) {
    //     $("dd").toggleClass("invisible");
    // }
    // button.click(buttonHandler);

    $(".answerButton").click(function() {
        $('dd').toggleClass('invisible');
    });

// highlight questions
    // let title = $("dt");
    // let highlightHandler = function(e) {
    //     $(this).toggleClass("highlight")
    // }
    // title.click(highlightHandler);

    $('dt').click(function() {
        $(this).css('background-color', 'yellow');
    });

// highlight last li
    $(".highlightButton").click(function() {
        $("ul").each(function() {
            $(this).children().last().addClass("highlight");
        });
    });

// bold li when h3 clicked
    $("h3").click(function() {
        $(this).next().children().addClass("makeBold");
    });

// when li clicked make first li blue
    $("li").click(function() {
        $(this).parent().children().first().addClass("makeBlue");
    });

// hide h1 when x clicked
    $(".closeButton").click(function() {
        $(".newsletter").slideUp();
    });

// show factList when h3 clicked
    $(".factTitle").click(function() {
        $(this).next().slideToggle();
    });