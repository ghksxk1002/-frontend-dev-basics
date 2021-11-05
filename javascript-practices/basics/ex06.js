/*
자바스크립트 객체1 : object 타입

1. 자바스크립트 객체는 object 타입과 function 타입이 있다: 이해 한되면 예제 2로
2. 보통 function 타입 객체는 '함수'라고 부른다
3. 따라서 자바스크립트에서 우리가 흔히 객체라고 부르는 것은 object 타입의 객체라 할 수 있다.
*/

// 생성방법1
// 생성자 함수를 사용하는 방법
// Object, Number, String, RegExp, Date, Array - 내장 함수 객체
var O1 = new Object();
O1.name = '둘리'
O1.age =10;
O1.another = new Object();
O1.another.name = '마이콜';
O1.another.age=20;

console.log(O1);

// 그리고 사용자 정의 생성자 함수
var MyObject = function(name) {
    this.name = name;
}

var O = new MyObject('둘리');
console.log(O.name);

// 생성방법2
// {} 리터럴을 사용하는 방법
o2 = {};
    o2.name = '둘리'
    o2.age =10;
    o2.another = new Object();
    o2.another.name = '마이콜';
    o2.another.age=20;

console.log(o2);


// 생성방법3
// (J)ava(s)cript (o)bject (N)otation : json
var o3 = {
    name: '둘리',
    age: 10,
    another: {
        name: '마이콜',
        age: 30
    }

};

console.log(o3);

// XmlHttpRequest 호스트(브라우저) 객체를 사용해서 통신(AJAX)에서 데이터 교환으로 포맷을 JSON으로 사용한다.
var response = "{name: '둘리', age: 10, email: '둘리@gmail.com'}";

// String 으로 된 객체를 실행하는 eval
var userVo = eval("("+response+")");
console.log(userVo);


