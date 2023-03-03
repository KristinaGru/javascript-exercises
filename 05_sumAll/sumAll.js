

const sumAll = function(x, y) {
    let sum = 0;
    if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0) {
        return "ERROR";
    } else if (x>y) {
        for (i = x; i > y-1; i--) {
            sum = sum + i;
        } 
        return sum;
    } else if (y>x) {
        for (i = x; i < y+1; i++) {
            sum = sum + i;
        } 
        return sum;
    }
}

console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
