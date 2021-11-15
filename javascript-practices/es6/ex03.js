/**
 * Template Literal
 */

let no = 10;
let name = '둘리';
let email = 'ghksxk1002@naver.com';

// ex01
console.log("no: "+ no + " name: " + name + " email: " + email);
console.log(`no:${no}, name:${name}, email:${email}`); // 위에 선언된 상수나 변수명들이 있어야 Template 리터럴을 쓸수 있다

// ex02: 다중행
console.log(
`no:${no}
name:${name} 
email:${email}`);

