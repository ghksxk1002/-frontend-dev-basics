/**
 * const : Block scope의 상수
 */

// 블락스콤 확인
try {

    if(true){
        const i = 10; // 블락스콥에 대한 에러
    }
    console.log(i);

    
} catch (e) {
    console.error("[error]: "+ e);
}

console.log("--------------------------------------")

// 상수에러: 대입 에러 (assigment)
try {
    const num = 10;
    num = 20;
} catch (e) {
    console.error("[error]: "+ e);
}