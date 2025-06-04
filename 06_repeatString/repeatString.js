const repeatString = function(word, number) {
    if(number < 0)
    {
        return("ERROR");
    }
    let combination = "";
    for (let i = 0; i < number; i++){
        combination += word;
    }
    console.log(combination);
    return(combination)
};

// Do not edit below this line
module.exports = repeatString;
