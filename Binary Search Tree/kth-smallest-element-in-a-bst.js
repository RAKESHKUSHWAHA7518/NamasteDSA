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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // if(!root) return  []
    // let level=null;
    // if(k==level){
    //    return root.val
    // }else {
    //  kthSmallest(root ,k) 
    // }

     let ans = null;
    let count = k;

    const traversal = (curr) => {
        if (!curr || ans !== null) return;

        traversal(curr.left);
        count--;

        if (count === 0) {
            ans = curr.val;
            return;
        }

        traversal(curr.right);
    };

    traversal(root);
    return ans;

};