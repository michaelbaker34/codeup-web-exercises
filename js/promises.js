"use-strict";

    function wait(n) {
        return new Promise((resolve, reject) => {
            (n > 0) ? resolve(setTimeout(() => { console.log(`${n} milliseconds have passed`); }, n)) : reject(console.error("n 0 or less "));
        });
    }

    wait(3000).then((message) => console.log(message))
                 .catch((message) => console.error(message));

    wait(1000).then((message) => console.log(message))
                 .catch((message) => console.error(message));

// fetch(url, {headers: {"Authorization": GITHUB_TOKEN}});

