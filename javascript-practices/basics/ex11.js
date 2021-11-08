/*
Array 메소드
*/

var colors = ['black', 'blue', 'yellow'];
var fruits = ['apple', 'mango', 'bananan'];

//  concat : 배열 합치기
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push : stack지원
var color = colors.pop();
console.log(color);

colors.push('red');
console.log(colors);

// join
var str = fruits.join(":");
console.log(str);

// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 2000, 6000, 4000, 8000 , 3000];
var numbers = numbers.shift();
console.log(numbers);

// sort
numbers.sort();
console.log(numbers);

// slice
var numbers = numbers.slice(1,3);
console.log(numbers);


// splice
// index부터 count 개를 삭제후 삭제된 요소를 반환
console.log(fruits);
var fruits2 = fruits.splice(0/*index*/, 2/*count*/);
console.log(fruits2);

var a1= [0,1,2,3,4];
var a2 = a1.splice(1, 3, 10);
console.log(a2);