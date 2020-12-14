"use strict";

//External JS Lecture Practice
// console.log("Hello from external JavaScript.");
//
// alert("Welcome to my Website!");
//
// var favoriteColor = prompt("What is your favorite color?", "");
// var message = ("Great, " + favoriteColor + " is my favorite color too!");
// alert(message);
//
// var littleMermaidDays = parseInt(prompt("How many days to rent Little Mermaid?"));
// var brotherBearDays = parseInt(prompt("How many days to rent Brother Bear"));
// var herculesDays = parseInt(prompt("How many days to rent hercules"));
// var rentalPriceDollars = 3;
// var totalRentalPriceDollars = (rentalPriceDollars *
//     (littleMermaidDays + brotherBearDays + herculesDays));
// alert("Total cost of rentals = $" + totalRentalPriceDollars);
//
// var googlePayDollars = 400;
// var amazonPayDollars = 380;
// var facebookPayDollars = 350;
// var googleHours = prompt("How many weekly hours worked at Google?");
// var amazonHours = prompt("How many weekly hours worked at Amazon?");
// var facebookHours = prompt("How many weekly hours worked at Facebook?");
// var totalWeeklyPayDollars = (googlePayDollars * googleHours) +
//     (amazonPayDollars * amazonHours) +
//     (facebookPayDollars * facebookHours);
// alert("Total pay for this week = $" + totalWeeklyPayDollars);
//
// var isClassAvailable = confirm("Are there seats in the class?");
// var isScheduleAvailable = confirm("Is the schedule clear?");
// alert("Is enrollment open: " + (isClassAvailable && isScheduleAvailable));
//
// var areEnoughItemsPurchased = confirm("Did you buy more than 2 items?");
// var isOfferValid = confirm("Is the offer still valid?");
// var isPremiumMember = confirm("Are you a premium member?");
// alert("Is the product offer applied: " +
//     (isOfferValid && (areEnoughItemsPurchased || isPremiumMember)));

// Functions Lecture Practice
// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters.
// Return false otherwise.

// function isShortWord(input) {
//     return input.length < 5;
// }

// console.log(isShortWord("lasagna"));
// console.log(isShortWord("dog"))

// // Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length.
// // Return false otherwise.

// function isSameLength(inputOne, inputTwo) {
//     return inputOne.length == inputTwo.length;
// }

// console.log(isSameLength("fancy", "times"), true);
// console.log(isSameLength("dog", "time"), false);

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that
// is as many characters long as the second argument in lowercase.
// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

// function getSmallerSegment(input, inputLength) {
//     return input.substring(0, inputLength).toLowerCase();
// }

// console.log(getSmallerSegment("bananas", 3), "ban");
// console.log(getSmallerSegment("SUPER", 2), "su");