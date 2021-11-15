/**
 * 4. Defult parameter
 */

const print = function(strs, end='\n'){ // 파라미터로 값이 넘어 오지 않으면 초기값을 지정해줄수 있다
    console.log(strs.join(end));
};

print(['Always', 'with', 'me']);
print(['Always', 'with', 'me'], ' '); 