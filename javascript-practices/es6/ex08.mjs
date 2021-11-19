// 1.unnamed export 모듈에서 대상을 하나 import 할때는 이름을 지정해야 한다
// import 문법 

import myFunction from './ex08.01.mjs'; // import 부른 모듈 별명 from 내가 부를 모듈위치
import myObject from './ex08.02.mjs';

console.log(myFunction(10,20));
console.log(myObject.add(10,20));
console.log(myObject.substract(10,20));

console.log("-------------------------------------------")

// 2. named export는 import 대상이 다수가 될수 있기 때문에 하나의 특정 이름으로 받을수 없다
// 대신 * as ~를 사용하여 별명을 붙여서 ~.ㅇㅇㅇ 이런식으로 참조한다
// import m from './ex08.03.mjs';
import * as m from './ex08.03.mjs';

console.log(m.add(10,20));
console.log(m.subtract(10,20));

// 3.
import {subtract} from `./ex08.04.mjs`;
console.log(subtract(10, 20));

// 4.
import math, {add} from './ex08.05.mjs'