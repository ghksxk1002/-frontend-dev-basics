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