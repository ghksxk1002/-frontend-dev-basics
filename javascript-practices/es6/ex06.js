/**
 *  구조분해
 */
const user = {
    firstName: "둘",
    lastName: "그만",
    email: "ghksxk1002@naver.com"
};

({firstName, lastName, email} = user);

console.log(firstName, lastName);