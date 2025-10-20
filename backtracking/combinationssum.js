/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    let backtrack = (remainingSum, path, start) => {
        if (remainingSum === 0) {
            result.push([...path]);
            return;
        }
        if (remainingSum < 0) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(remainingSum - candidates[i], path, i); // i (not i+1) because we can reuse the same element
            path.pop();
        }
    };

    backtrack(target, [], 0);
    return result;
};