// 별로 안좋은 방법 : 리콰이어가 만들어놓은 객채 한번더 만들기
module.exports = {
    sum : function(){
        var sum = 0;
        // argruments라는 유사배열을 배열로 사용할수 있게 해줌
        Array.from(arguments).forEach(function(e){
            sum +=e;
        });
        return sum;
    },

    min: function(){
        var min = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            min = e > min ? e : min;
        });

        return min;
   },

    max: function(){
        var max = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            max = e < max ? e : max;
        });

        return max;
   }
};