(function () {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["bob", "dan", "jon", "ken"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("Number of elements in names array are " + names.length, 4);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // console.log("First name is " + names[0]);
    // console.log("Second name is " + names[1]);
    // console.log("Third name is " + names[2]);
    // console.log("Fourth name is " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for (var i = 0; i < names.length; i++) {
    //     console.log("Name " + i + " is " + names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name, index) {
        console.log("Name at index: " + index + " is " + name);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var numbers = [1, 2, 3, 4, 5];
    var firstIndex = numbers[0];
    var secondIndex = numbers[1];
    var lastIndex = numbers[numbers.length - 1];

    function firstElement(array) {
        return firstIndex;
    }

    function secondElement(array) {
        return secondIndex;
    }

    function lastElement(array) {
        return lastIndex;
    }

    console.log(firstElement(numbers));
    console.log(secondElement(numbers));
    console.log(lastElement(numbers));


}) ();