/*
자바스트립트 객체 4
portotype 기반의 상속과 오버라이딩(자바스티립트 객체지향 프로그래밍)
*/

var MyObject = function(name, age) {
    this.name= name;
    this.age = age;

}

MyObject.prototype.school= 'BIPA';
MyObject.prototype.course = 'DOUzONE';
MyObject.prototype.info = function(){
    console.log(this.name + " : " + this.age + " : " + this.school + " : " + this.course);
}

// MyObject 객체 생성
var o1 = new MyObject("둘리", 10);
o1.school = 'ddddd';
o1.info();

var o2 = new MyObject("마이콜", 10);
o2.info();

// OverRrinding
o2.info = function(){
    console.log("비밀!");
}

o2.info();