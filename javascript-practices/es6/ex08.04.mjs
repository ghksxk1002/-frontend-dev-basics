/**
 * named export with keyword 
 * - 이름있는 객체를 하나 export 하는 경우
 * tip: export는 수출
 * 
 * exports(requier.js)와 유사하다 이 모듈은 import 할때 destructing이 가능하다
 */

// export 키워드
const add = function(a, b){
    return a+b
};

const substract = function(a,b){
    return a-b
};


// 함수를 여러개 정의한 다음 
// 모아서 export 한다
export {add, substract};

