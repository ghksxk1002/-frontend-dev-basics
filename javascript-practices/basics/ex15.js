/*
date
*/

var now= new Date();
console.log(now);

// 2022년 11월 8일 
var d1 = new Date(2022, 11,8);
console.log(d1);

// 2022년 11월 8일 
var d2 = new Date(2022, 11 ,8 ,12 ,30 ,40);
console.log(d2);

// 객체 메소드
console.log(
    "년도 : "+(d2.getYear() + 1900) + "\n",
    "월 : "+(d2.getMonth + 1 ) + "\n",
    "일 : " +(d2.getDate) +"\n",
    "시"
    )