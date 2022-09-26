const sumAll = function(num1 , num2) {
    var sum = 0;
    var first = 0;
    var last = 0;
    if(num1 < num2){
        first = num1;
        last = num2;
    }else if(num1 > num2){
        first = num2;
        last = num1;
    }
    if(num1 < 0 || num2 < 0 || !(Number.isInteger(num1)) || !(Number.isInteger(num2))){
        return 'ERROR';
    }else{
        for(i = first; i <= last; i++){
            sum += i;
        }
    }       
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
