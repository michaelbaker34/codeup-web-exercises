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