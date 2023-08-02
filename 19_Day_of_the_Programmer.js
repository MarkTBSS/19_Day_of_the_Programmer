function dayOfProgrammer(year) {
    var result = "12.09."
    if (year < 1919) {
        if (year % 4 === 0) {
            result += year;
        } else {
            result = "13.09."
            result += year;
        }
    }
    if (year >= 1919) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            result += year;
        } else {
            result = "13.09.";
            result += year;
        }
    } 
    if (year == 1918) {
        result = "26.09.1918"
    }
    return result;
}

var year = 2017
console.log(dayOfProgrammer(year));