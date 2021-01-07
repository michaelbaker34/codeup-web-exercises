(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Michael",
        lastName: "Baker",
        sayHello: "Hello from Michael Baker"
    };

    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function() {
    //     return "Hello from" + this.firstName + " " + this.lastName;
    // }

    console.log(person.sayHello);
    console.log("==============================");

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discountAmountThreshold = 200;
    var discountPercentage = .12;

    function calculateDiscount (amount, discountAmountThreshold, discountPercentage) {
        return (amount > discountAmountThreshold) ? amount * discountPercentage : 0;
    }

    function displayCurrency (amount) {
        return "$" + amount.toFixed(2);
    }

    shoppers.forEach(function (shopper) {
        var shopperName = shopper.name;
        var amountBeforeDiscount = shopper.amount;
        var amountOff = calculateDiscount(amountBeforeDiscount, discountAmountThreshold, discountPercentage);
        var totalCost = amountBeforeDiscount - amountOff;
        var message = shopperName
            + " purchased " + displayCurrency(amountBeforeDiscount)
            + " and is getting " + displayCurrency(amountOff)
            + " off the purchase price, and is paying " + displayCurrency(totalCost);

    console.log(message);
    });

    console.log("==============================");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [createBook("Silmarillion", "J.R.R.", "Tolkien"),
        createBook("Dune", "Frank", "Herbert")];

    //     old books array[
    //     {title:"The Hitchhiker's Guide to the Galaxy",
    //         author: {
    //             firstName:"Douglas",
    //             lastName:"Adams"
    //         }
    //     },
    //     {title:"The Silmarillion",
    //         author: {
    //             firstName:"J.R.R.",
    //             lastName:"Tolkien"
    //         }
    //     },
    //     {title:"1984",
    //         author: {
    //             firstName:"George",
    //             lastName:"Orwell"
    //         }
    //     },
    //     {title:"Shogun",
    //         author: {
    //             firstName:"James",
    //             lastName:"Clavell"
    //         }
    //     },
    //     {title:"Sapiens",
    //         author: {
    //             firstName:"Yuval",
    //             lastName:"Harari"
    //         }
    //     }
    // ];

    // books test
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // Old Books forEach
        // books.forEach(function (book, index) {
        //     var bookNumber = index + 1;
        //     console.log("Book # " + bookNumber
        //     + "\nTitle: " + book.title
        //     + "\nAuthor: " + book.author.firstName
        //     + " " + book.author.lastName
        //     + "---");
        // });


/**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
    }

    function showBookInfo(book) {
        return "Title: " + book.title + "\n" +
                "Author: " + book.author.firstName + " " + book.author.lastName;
    }

    books.push(createBook("The Wheel of Time", "Robert", "Jordan"))

    books.forEach(function (book,bookIndex) {
        var bookNumber = bookIndex + 1;
        console.log("Book " + bookNumber + "\n" + showBookInfo(book));
    })
})();