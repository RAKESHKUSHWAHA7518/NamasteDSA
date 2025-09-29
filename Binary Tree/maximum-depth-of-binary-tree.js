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
var maxDepth = function(root) {
    let max=0
if(!root) return 0
     function maxD(curr,depth){
        max=Math.max(max,depth)
       curr.left && maxD(curr.left,depth+1)
      curr.right&&  maxD(curr.right,depth+1)
     }
     maxD(root,1)
     return max


    //   bottom up apporoch

    // let maxz=0
    // function max(curr){
    //     if(!curr) return 0;
    //     leftmax= maxDepth(curr.left)
    //     rightmax=maxDepth(curr.right)
    //     maxz= 1+ Math.max(leftmax,rightmax)
    // }
    // max(root)
    // return maxz
};