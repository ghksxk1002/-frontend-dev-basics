const ex02 = require('./ex02');

const ex03 = async function(param){
    
    // 에러 처리를 여기서 받아서 처리한다
    try{
        const res = await ex02(param);
        console.log(`[res] : ${res}`)    
    } catch (err) {
        console.log(`[err] : ${err}`)
    }

}

ex03("param-data");
ex03("param-error");

console.log("wati..........................")