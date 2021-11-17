/**
 *  구조분해
 */
const user = {
    firstName: "둘",
    lastName: "그만",
    email: "ghksxk1002@naver.com"
};

// ({firstName, lastName, email} = user);
const {firstName, lastName, email} =user;
console.log(firstName, lastName);

// ex02
const goods = {
    name: "TV",
    price: 300,
    stockCount: 30
};

let {name, price, countStock=0,stockCount=0}=goods;
console.log(name, price, countStock, stockCount);

// ex03 - 구조 분해를 해야할 객체의 속성과 새로 만들어야할 변수의 이름이 다를때 
const person = {
    name:"이승현",
    country:"Korea"
};

let {name: fullname, country: place} = person;
console.log(fullname, place);

// ex04 내부 객체(nested Object)의 구조분해는 어떻게 하느냐
const student = {
    name:"둘리",
    age:10,
    score: {
        math: 90,
        korean: 80,
        science:10
    }
};

const {
    name: studentName, 
    score: {
        math=0, 
        korean=0, 
        science=0, 
        music=0}}=student;

console.log(`${studentName}의 성적
수학:${math}
국어:${korean}
과학:${science}
음악:${music}`
);

// ex05 함수의 파라미터

// const {score: {
//         math=0, 
//         korean=0, 
//         science=0, 
//         music=0}}=score
const averageScore = function({name: studentName, score:{math=0, korean=0, science=0}}) {
    console.log(`${studentName}의 평균은 ${(math+korean+science)/3}입니다`)
};

// 예 서버나 함수에서 넘겨준 객체를 받아서 처리하고 싶을때
averageScore(student)