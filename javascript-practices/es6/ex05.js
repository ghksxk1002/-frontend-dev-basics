/**
 * Arrow Function
 */

const power = function(x){
    return x*x;
}

let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function(n){
  process.stdout.write(`${n}:${power(n)}\t`);  
});

console.log("\n---------------------------\n");

const pow = x => x*x;

numbers.forEach(function(n){
    // let result =(function(x){
    //     return x*x;
    // });
    // process.stdout.write(`${n}:${power(n)}\t`);

    // let result =(x =>{
    //     return x*x;
    // })(n);

    let result =(x => x*x)(n); // 람다식

    process.stdout.write(`${n}:${power(n)}\t`);
});

// ex2
console.log("\n-----------------------------\n");
numbers.forEach(n => process.stdout.write(`${n}:${(x => x*x)(n)}\t`));

// ex3 - 여러행 함수
console.log("\n-----------------------------\n");
[5, 3, 6, 98 ,1000, 1002, 5005].forEach(e => {
    if(e % 5 == 0){
        process.stdout.write(`${e}\t`);
    }
});

// ex4 - this를 어휘적 binding 이 가능하다(Lexical Bind)
console.log("\n-----------------------------\n");
const dooly = {
    name: '둘리',
    friend: ['또치', '바우나', '도우너', '승현'],
    printfriend: function(){
        // this.friend.forEach(function(f){
        //     console.log(`${this.name}의 친구 ${f}`);
        // }.bind(this));

        this.friend.forEach(f => {console.log(`${this.name}의 친구 ${f}`)});

    }
}

dooly.printfriend();