/*
    변수의 범위 (Scpe)
    1.자바스크립트는 어휘에서 변수의 범위를 알수 있는 정적 범위다(Lexical scope)
    2.자바스크립트는 ES6
    3.이전에는 자바와 같은 블록 범위를 지원하지 못했다. 함수 범위만 지원했다(Function Scope)
            ex) funtion() {...} 안에서 변수 앞에서 var 키워트를 사용하면 함수 업위를 가지게 된다
            만일 var 키워드 없이 함수 안에서 변수를 정의하게 되면 전역범위를 가지게 된다.(Hoisting)
            - var를 붙이면 엔진이 읽을수 있는 Variable Context를 생성해주는데 함수 범위의 컨테스르에 생성되어 스택의 맨위에 있다
    4.이후에는 
        -새롭게 BlockScope이 생기게 두 키워드를 사용한다.
        -let : 변수에 사용
        -const : 상수에 사용
    5. const/let 만 사용하고 반드시 붙이자
*/
 var i = 10;
 var f = function(){
     var i = 20;
     j = 100;
     console.log(i);
     i = j - 1;
 }

 {
    y = 1;
    let l=10;
    const c=10;

    l =100;
 }
// 블락단위로 되었있기 때문에 접근이 안됨
//console.log(l);
console.log(y);

 f();
 console.log(i);
 console.log(j);

