const { parse } = require("dotenv");

const fibonacci = function(a) {
    let num1 = 0; 
    let num2 = 1; 
    let buffer = 0;
    a = parseInt(a);
    
    if (a < 0){
        return "OOPS"
    } else if (a == 0){
        return num1;
    } else {
        for (let i = 2; i <= a; i++){
            buffer = num2;
            num2 = num1 + num2;
            num1 = buffer;
        }
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
