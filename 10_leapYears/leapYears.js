const leapYears = function(year) {
    if (Number.isInteger(year/4)){
        if (Number.isInteger(year/100)){
            if (Number.isInteger(year/400)){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
