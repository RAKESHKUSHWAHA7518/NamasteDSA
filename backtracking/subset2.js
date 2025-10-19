/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b); // sort to handle duplicates easily
    
    let backtrack = (path, start) => {
        result.push([...path]); // add current subset
        
        for (let i = start; i < nums.length; i++) {
            // skip duplicates
            if (i > start && nums[i] === nums[i - 1]) continue;
            
            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop();
        }
    };
    
    backtrack([], 0);
    return result;
};
