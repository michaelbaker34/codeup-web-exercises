"use-strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/* TODO
*   use .filter() create array of user objects
*   each user object has at least 3 languages in array
*/
    let languages = users.filter(x => x.languages.length >= 3);

    console.log("--- languages ---");
    console.log(languages);

/* TODO
*   use .map() create array of strings
*   each element should be email address
*/
    let emails = users.map(x => x.email);

    console.log("--- emails ---");
    console.log(emails);

/* TODO
*   use .reduce() get total years exp from users
*   calculate results of avg
 */
    let experience = users.reduce((total, x) => (total + x.yearsOfExperience), 0);
    experience = experience / users.length;

    console.log("--- average years experience ---");
    console.log(experience);

/* TODO
*   use .reduce() get longest email
 */
    let longestInstructorEmail = users.reduce((longestEmail, userEmail) =>
        (userEmail.email.length > longestEmail.email.length) ? userEmail : longestEmail);

    console.log(longestInstructorEmail.email);

/* TODO
*   use .reduce() get list of user names in single string
*   ex: "Your instructors are: name, name, name.
 */
    let namesArray = users.reduce((a, user) => a.concat(user.name), []);
    let namesString = `Your instructors are: ${namesArray.join(", ")}`;

    console.log(namesString);

/* TODO
*   use .reduce() to get unique languages from user list
 */
    // let uniqueLanguages = users.reduce((a, user) => { });
    // console.log(uniqueLanguages);