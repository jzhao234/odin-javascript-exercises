const palindromes = function (a) {
    a = a.toLowerCase();
    let cleanString = ""; 
    let reverseString = "";
    for (let i = 0; i < a.length; i++){
        if (("!@#$%^&*()?,.".includes(a[i])) || (a[i] === " ")) {
            
        } else {
            cleanString += a[i];
        }
    }
    for (let i = cleanString.length-1; i >= 0; i--){
        reverseString += cleanString[i];
    }
    if (reverseString === cleanString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
