"use strict";

// 2
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}

// 3
function randomOddEven() {
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
        var checkOddEven = (randomNumber % 2 === 0) ? "even" : "odd";

        // console.log(randomNumber);
        // console.log(checkOddEven);
        console.log("The number " + randomNumber + " is " + checkOddEven);
    }
}

// 4
function numberTriangle() {
    for (var i = 1; i <= 9; i += 1) {
        console.log(String(i).repeat(i));
    }
}

// 5
function countDown() {
    for (var i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}