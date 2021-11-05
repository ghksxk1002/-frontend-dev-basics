/* null 과 undefined */
var myVar1= undefined;// 명시적 undefined가 대입이 된다
var myVar1;           // 암시적으로 undefined 대입이 된다
var myVar2=null;

console.log(myVar1 +":" + myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2));

console.log(myVar1==myVar2);// 깊 ;ㅂ겨
console.log(myVar1===myVar2);

console.log("=====================[");

console.log(4 =="4");
console.log(false == 0);
console.log("abc" == new String("abc"));

console.log(true + 10);
console.log('abc' + new String("abc"));
console.log(1 +"1");
console.log("1"+ 1);

console.log("=====================[");

// === : identity
// 1. 타입의 동일서 따지고
// 2.  값이 동일성 또는 객체의 동일성 
// 3. 형변환
console.log("2" == 2);
console.log(true ===1);
console.log(2===4);
console.log(new Number(4) === new Number(4));