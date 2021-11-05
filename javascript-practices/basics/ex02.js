/*
변수와 테이터 타입
[기본타입(primitive type)] --> 유사객체다 : Wrapper객체가 생성되서 객체처럼 쓸수 있다
undefiend
number
string
boolean

[객체1] - object type
1. new 생성자함수() 사용해서 생성
    Number() - object type
    Boolena() - object type
    String() - object type
    Object() - object type
    Array() - object type

2.null
3.{} (객체 리터럴, JSON)
4.[] (배열 리터럴)

[객체2] - function type
1. new Function(...) 생성
2. var f = function() 함수 리터럴1을 사용해서 생성
3. function f() {} 함수 리터럴1을 사용해서 생성
*/

/*
자바스크립트의 객체를 구분하는 또다른 방법
1. 내장(Built-In, Native, Engine) 객체(엔진이 가지고 있는 순수한 객체)
   자바 스크립트 엔진안에 미리 내장되어 있는 객체
   Number, Boolean, Date, RegExp,..... : 객체를 생성하는 생성자 함수들
   parseInt, setTimeout,  ...          : 기능을 수행하는 일반 한수

   2. 호스트 객체(호스트: 브라우저나 노드)
    자바그크립트 엔지ㅣ 밈베디드된 환경(호스트)의 객체(자바스크립트 접근 가능)
    호스트 환경이 브라우저라면 : document, location, xmlHttpRequest
    호스트 환경이 노드(Node.js) 라면 : os, http, fs, path
3. 사용자 객체
    자바스크립트 엔진이 실행되먄서 생성되는
*/
console.log("==== 원시 타입(Primitive Type)=================================");
var u; // var u=undefined와 동일 --> 자바 스크립트는 선언과 정의가 구분이 없다.
var i = 10; 
var s = "Hello word";
var b = true;

console.log("u : "+typeof(u)); // typeof(u); 정의되지 않은 변수에 undefiend로 지정해준다
console.log("i : "+typeof(i)); // 변수는 기본타입이 number
console.log("s : "+typeof(s)); // .. string
console.log("s : "+typeof(b)); // .. boolean

console.log("==== [객체1] (object Type)=================================");
var i2 = new Number(1);
var b2 = new Boolean(false);
var s2 = new String("Hello world");
var o = new Object();
var a = new Array();

var n = null;
var o2 = {};
var a2 = [];
console.log("i2 : "+typeof(i2));
console.log("b2 : "+typeof(b2));
console.log("s2 : "+typeof(s2));
console.log("o  : "+typeof(o)); // 빈객체
console.log("a  : "+typeof(a));
console.log("o2 : "+typeof(o2));
console.log("a2 : "+typeof(a2));
console.log("n  : "+typeof(n));

console.log("==== [객체2] (function Type)=================================");
var f = new Function("a", "b","return a + b");
var f2 = function(a, b){
    return a+b;
}

console.log("f : "+typeof(f));
console.log("f2 : "+typeof(f2));

console.log(f(10, 20));
console.log(f2(10, 20));

console.log("==== 원시타입과 타입을 Wrapper 객체는 구분없이 사용할 수 있다=================================");
console.log(i + i2);
console.log(s +" "+s2);

// 원시 타입에 메소드가 호출될때,
// 임시 Wrapper 객체가 만들어줘서 메소드 호출이 일어난뒤 사라진다(이걸 유사 객체라고 한다 --> 원시타입을 유사 객체라고 하는 부분)
console.log("==== 원시타입도 메소드 호출이 가능하다=================================");
console.log(b.valueOf());
console.log(b2.valueOf());
