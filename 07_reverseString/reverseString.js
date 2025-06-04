const reverseString = function(string) {
    backwards = "";
    length = string.length;
    for (let i = 0; i < length; i++){
        backwards += string.charAt(string.length-1-i)
    }
    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
