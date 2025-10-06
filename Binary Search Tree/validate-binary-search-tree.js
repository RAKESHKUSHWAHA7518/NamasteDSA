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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // let ans=null
    //  let tra=(curr)=>{
    //      console.log(curr.val ,curr.right)
    //       console.log(curr.val ,curr.left )
    //        console.log(curr.val >curr.left || curr.val <curr.right)
    //     if(curr.val >curr.left || curr.val <curr.right){
    //         ans=true
    //     } else{
    //         ans=false
    //     }
        

    //  }
    //  tra(root)
    //  return ans

     let ans = true;

    let tra = (curr, min, max) => {
        if (!curr) return;

        if (curr.val <= min || curr.val >= max) {
            ans = false;
            return;
        }

        tra(curr.left, min, curr.val);
        tra(curr.right, curr.val, max);
    };

    tra(root, -Infinity, Infinity);
    return ans;
    
};