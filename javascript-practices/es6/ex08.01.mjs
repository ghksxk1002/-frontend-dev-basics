/**
 * unnamed export with keyword 
 * 
 */

// export 키워드
export default function(a, b) {
    return a+b;
}
// 이름 없는 함수가 두개면 export 하는 입장에서 어떤걸 가져가야 할지 모른다
// 따라서 에러다. default 키워드는 이름없는 함수 하나에만 달수 있다
// export default function(a, b) {
//     return a+b;
// } 