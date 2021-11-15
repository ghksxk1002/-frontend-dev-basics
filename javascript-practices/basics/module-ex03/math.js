/*
    exports 뒤에 꼭 이름을 사용해서 exports 한다
    named** exports
*/

exports.PI = 3.14;

exports.sum =function(){
        var sum = 0;
        // argruments라는 유사배열을 배열로 사용할수 있게 해줌
        Array.from(arguments).forEach(function(e){
            sum +=e;
        });
        return sum;
    };

exports.min = function(){
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            min = e < min ? e : min;
        });

        return min;
   };

exports.max = function(){
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });

        return max;
   };
