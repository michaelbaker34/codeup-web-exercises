"use strict;"

    let button = $(".answerButton");
    let buttonHandler = function(e) {
        $("dd").toggleClass("invisible");
    }

    let title = $("dt");
    let highlightHandler = function(e) {
        $(this).toggleClass("highlight")
    }

    button.click(buttonHandler);
    title.click(highlightHandler);
