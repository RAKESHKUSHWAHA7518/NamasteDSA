/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    return gcd(minNum, maxNum);
};