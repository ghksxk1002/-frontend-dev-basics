/*
구문(statement)
1. 자바스크립트 실행 단위
2. 구문 구성
    - 값, 연산자 : 표현식
    - 주석 : 구문을 구성해도 실행되지 않는다.
    - 예약어들 : if, const, for, ...

3. 구문의 이해
if,
if~else
switch
for,
while,
do~while,
for~in
*/

// 세미클론의 역할
// 1. 표현식을 표현식구문으로 만들어줘서 표현식을 바로 실행하게 된다.
i = 10;
var s = "Hello world"; console.log(s);

// 개행의 역할 ;을 대체한다
var s = "hello world"
console.log(s);

// 개행의 역활2 : 상황에 따라서는 토큰을 분리하는 역할을 한다
a 
= 
25;
+
2

console.log(a);