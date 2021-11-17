const ex01 = function(param, callback){
    // 비동기 코드
    //파일 접근시스템, 네트워크 통시느 SQL to DB, setTimeout

    setTimeout(function(){
        if(param === 'param-data'){ // 파라미터로 넘어온 값이 올바른 값이다 라는 걸 세워두고
            callback(null, "ok"); // 첫자리는 에러 두번째 자리에는 데이터
        } else {
            callback(new Error('fail'), null); 
        }
    },2000)

}

// test01 : success
ex01('param-data', function(error, res){
    if(error){
        console.log(`[error]: ${error}`);
    } else {
        console.log(`[res]: ${res}`)
    }    
});
// test01 : 실패
console.log("wait...............")
ex01('param-error', function(error, res){
    if(error){
        console.log(`[error]: ${error}`);
    } else {
        console.log(`[res]: ${res}`)
    }    
});