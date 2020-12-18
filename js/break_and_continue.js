"use strict";

function skipInput() {
    do {
    var input = parseInt(prompt("Enter odd number between 1 and 50"));
    } while (input % 2 === 0 || input < 1 || input > 50);

    console.log("Number to skip is: " + input);

    for (var i = 1; i < 50; i += 2) {
        if (i === input) {
            console.log("Skipping number: " + input);
        } else {
            console.log("Here is an odd number: " + i);
        }
    }
}