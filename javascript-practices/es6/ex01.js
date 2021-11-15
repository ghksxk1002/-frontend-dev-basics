/**
 * let : Block scope의 변수
 */

// let의 블록 범위 
try {
    if(true){
        var i=10;
        let j=20; // 블락범위로 지정된 변수 j
    }

    console.log(i);
    console.log(j); // 블락 범위로 지정되어있기 때문에 참조할수가 없다

} catch(e) {
    console.error('[error]: '+e);
}

// cf: var 함수 범위
try{
    let f =function() {
        // var m = 20; // let 안에 var또한 밖에서 참조가 안됨
        let m = 20;
    }

    f();
    console.log(m);

} catch(e){
    console.error("[error]"+e);
}