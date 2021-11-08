/*
Array 확장(prototype 기반의 확장): List 메소드 추가
*/

Array.prototype.insert = function(index, value){

    if(value instanceof Array){
        // for(var i = 0; i < value.length; i++){
        //     this.splice(index++, 0, value[i])
        // }
        
        // var _this = this;
        // this.forEach(function(e) {
        //     _this.splice(index++, 0, e);
        // });

        
        //이 함수가 불릴때 bind(this) 이 this에 값을 처리해서 바인딩 해줘라는 것
       value.forEach(function(e) {
            this.splice(index++, 0, e);
        }.bind(this));
        

    } else {
        this.splice(index, 0, value); 
    }

}


Array.prototype.remove = function(index){
    this.splice(index, 1); 
}

// List로 사용하기
var a = [1, 2, 3];
console.log(a);

a.insert(2,4);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a','b','c']);
console.log(a); //  [1, 2, 'a', 3]

//예제
var f = function(param) {
    console.log(this.name+" : "+param);
}

// f();

var Object = {name: '이승현'}
f.call(Object, "ghksxk1002@naver.com");

f.apply(Object);