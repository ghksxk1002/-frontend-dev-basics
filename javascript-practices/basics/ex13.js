/*
string
*/

// 배열처럼 접근이 가능하다
var str1 = "Hello world";
for(var i = 0; i < str1.length; i++){
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = 'Hello';
var str3 = 'world';
var str4 = str2 + " " + str3;
console.log(str4);

// 케스팅 : 자동으로 일어남
var Str5 = 5 + '5';
console.log(Str5);

var str6 = "boolean:" + true;
console.log(str6);

// 메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2");
console.log(index);

var index = str7.indexOf("string4");
console.log(index); // 찾지 못하면 -1


var str8 =  str7.substr(10); // 10th~ end
console.log(str8);

var str9 = str7.substr(10, 3);
console.log(str9);

console.log("----------------------------------")

var str10 = str7.substring(10, 13/* last index -1 */);
console.log(str10);

var a = str7.split(" ");
console.log(a);

var str11 = 'abcdef';
var a = str11.split(":");
console.log(a);