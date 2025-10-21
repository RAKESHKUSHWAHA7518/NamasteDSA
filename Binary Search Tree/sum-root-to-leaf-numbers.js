/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let totalSum = 0;

    // helper function for DFS traversal
    const dfs = (node, currentSum) => {
        if (!node) return;

        // build the current number
        currentSum = currentSum * 10 + node.val;

        // if it's a leaf node, add to totalSum
        if (!node.left && !node.right) {
            totalSum += currentSum;
            return;
        }

        // otherwise, continue exploring left and right subtrees
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
    };

    dfs(root, 0);
    return totalSum;
};