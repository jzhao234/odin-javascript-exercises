const removeFromArray = function(arr, ...removeFromArray) {

    for( let i = 0; i < removeFromArray.length; i ++) {
        arr = arr.filter(num => num !== removeFromArray[i])
    }
    console.log(arr);
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
