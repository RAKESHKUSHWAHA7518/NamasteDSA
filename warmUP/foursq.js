/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    //  if (n <= 0) return false; // negative or zero can't be powers of four
    // while (n % 4 === 0) {
    //     n /= 4;
    // }
    // return n === 1;
    if (n <= 0) return false;
    let logVal = Math.log(n) / Math.log(4);
    return Number.isInteger(logVal);
};