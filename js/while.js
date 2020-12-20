"use script";

// 1
function twoSixteenth() {
    var input = 2;
    var count = 1;

    while (count < 16) {
        console.log(input *= 2);
        count++;
    }
}

// 2
function coneSellCount() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    var conesToSell;

    do {
        conesToSell = Math.floor(Math.random() * 5) + 1;
        if (conesToSell <= allCones) {
            console.log(conesToSell + " cones sold.");
            allCones -= conesToSell;
        } else {
            console.log("Cannot sell you "
                + conesToSell
                + " I only have "
                + allCones
                + ".")
        }
        console.log(allCones + " are left.");
    } while (allCones > 0);
}