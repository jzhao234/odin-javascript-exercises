const sumAll = function(num1, num2) {
    let sum = 0;
    if ((num1 < 0)||(num2 <0)) {
        return ("ERROR");
    }
    if ((typeof num1 != "number") || (typeof num2 != "number")) {
        return ("ERROR");
    }
    if ((!Number.isInteger(num1)) || (!Number.isInteger(num2))){
        return ("ERROR")
    }
    if (num1 > num2) {
        
    } else if (num2 > num1) {
        let placeholder = num1;
        num1 = num2;
        num2 = placeholder;
    } else {
        return num1;
    }
    for (let i = 0; i <= num1-num2; i++) {
        sum += (num2 + i)
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
