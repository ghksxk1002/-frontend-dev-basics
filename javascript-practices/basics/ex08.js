/* 
자바스크립트 객체3 -확장
*/

var o ={
    name: "name",
    age: 10

};

console.log(o);

var f = function(){
    console.log("Hello world");
}

f();

var i1=10;
var i2=new Number(10);

console.log("================ 확장 =======================")
o.auther = {
    name: "마이콜",
    age:30
}

console.log(o);

f.auther = {
    name: "마이콜",
    age: 30 
}

console.log(f.auther);
console.log("================ 확장 =======================")

// 기본타입은 확장이 되지 않는다.
i2.auther = {
    name: "마이콜",
    age: 30 
}

console.log(f.auther);
console.log(i2.auther);

i1.auther = {};
console.log(i1.auther);

console.log(f.prototype);