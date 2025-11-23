/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
   const arr = nums.map(String);
    
    // custom sort: place a before b if a+b is lexicographically greater than b+a
    arr.sort((a, b) => {
        const ab = a + b;
        const ba = b + a;
        if (ab === ba) return 0;
        return ab > ba ? -1 : 1; // descending by concatenation
    });
    
    // join and handle all-zero case
    const res = arr.join('');
    return res[0] === '0' ? '0' : res;  
};