const removeFromArray = function(array, ...args) {
    args.forEach((arg) => {
        let x = array.indexOf(arg);
        if (x >= 0) {
            array.splice(x, 1);
        }
    })
    return array;
  }

// Do not edit below this line
module.exports = removeFromArray;
