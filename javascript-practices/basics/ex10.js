
// 1. 내장객체(생성자 함수)
console.log("==생성1: 내장객체(생성자 함수)=========")

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 배열을 정의할 때 크기 지정은 별 의미가 없다
// 동적으로 배열은 늘어난다
var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
a2[17]= 12;

// 배열 요소에 값을 지정하지 않으면 undefinded
console.log(a2[0]);
console.log(a2[2]);
console.log(a2.length);

// 초기값을 지정할수 있다
var a3 = new Array(0,2,4,6,8)
console.log(a3.length);

// 2. 리터럴
console.log("==생성2: 리터럴========");

var a4 = [function(){
    console.log("Hello");
}, 20, "자바스트립트", true, {
    
    name: "마이콜",
    email: "마이콜@naver.com"

}];

console.log(a4.length);
for(var i = 0; i < a4.length; i++){
    console.log(a4[i]);
}

// 배열안의 인덱스 0번이 함수이기 때문에 이렇게 호출하는것이 가능하다'
a4[0]();

// Array 와 Obkect 
console.log("=Array VS Object==================================================");
a5 = [];
a5[0] = 1;
a5["1"] = 2;
a5["name"]="둘리";
console.log(a5["0"],a5.length, a5[1]);

for(prop in a5){
    console.log(prop);
}

o5 = {};
o5.length = 0;
o5[0] = 1;
o5["1"] = 2;
o5["name"]="둘리";
console.log(o5["0"],o5.length, o5[1]);

for(prop in o5){
    console.log(prop);
}