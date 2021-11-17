const ex02 = function(param){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(param === 'param-data'){ // 파라미터로 넘어온 값이 올바른 값이다 라는 걸 세워두고
                resolve("ok"); // 첫자리는 에러 두번째 자리에는 데이터
            } else {
                reject(new Error("fail")); 
            }
        },2000);

    })
}

// 자신
if(require.main==module){
    // test01 : success
    ex02('param-data').then(function(res){
        console.log(`[res] : ${res}`)
    });

    ex02('param-data').catch(function(error){
        console.error(`[error] : ${error}`)
    });
    
    console.log("wait");
} else {
    module.exports = ex02;
}


// ex02('....')
// .then(res =>{

// })
// .catch(err => {

// });

