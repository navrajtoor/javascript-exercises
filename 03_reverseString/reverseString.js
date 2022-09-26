const reverseString = function(arr) {
    newArr = arr.split("");
    revArr = newArr.reverse();
    finArr = revArr.join("");
    return finArr;
};

// Do not edit below this line
module.exports = reverseString;
