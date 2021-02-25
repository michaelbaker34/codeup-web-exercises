"use-strict";

    function wait(n) {
        return new Promise((resolve, reject) => {
            (n > 0) ? resolve(setTimeout(() => { console.log(`${n} milliseconds have passed`); }, n)) : reject(console.error("n 0 or less "));
        });
    }
    // wait(3000).then((message) => console.log(message))
    //              .catch((message) => console.error(message));
    //
    // wait(1000).then((message) => console.log(message))
    //              .catch((message) => console.error(message));

function listCommits(userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`)
        .then(response => console.log(response.json()))
        .catch(error => console.error(error));
}

listCommits("michaelbaker34");