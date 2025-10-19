/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(arr) {
    //   const result = [];

    // const backtrack = (path, used) => {
    //     if (path.length === nums.length) {
    //         result.push([...path]);
    //         return;
    //     }

    //     for (let i = 0; i < nums.length; i++) {
    //         if (used[i]) continue;
    //         path.push(nums[i]);
    //         used[i] = true;
    //         backtrack(path, used);
    //         path.pop();
    //         used[i] = false;
    //     }
    // };

    // backtrack([], Array(nums.length).fill(false));
    // return result;

     let result = [];
    let n = arr.length;

    let backtrack = (path) => {
        if (path.length === n) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!path.includes(arr[i])) {
                path.push(arr[i]);
                backtrack(path);
                path.pop();
            }
        }
    };

    backtrack([]);
    return result;
};