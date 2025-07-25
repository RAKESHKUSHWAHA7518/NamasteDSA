/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n= nums.length;

    let totalsum= (n*(n+1))/2;

    let psum=0;

    for( let i=0; i<n;i++){
        psum= psum+nums[i];
    }

    return totalsum-psum;
    
};