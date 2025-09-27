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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans=[]
    function Traversal(val){
        if(!val) return 
   
 Traversal(val.left)
  ans.push(val.val)
 Traversal(val.right)
    }

    Traversal(root)

    return ans

    //  ilterative solution

// let curr=root;
// let stack =[]
// let ans=[];
//  while(curr || stack.length){

//     while(curr){
//         stack.push(curr)
//         curr=curr.left
//     }
//    curr= stack.pop()
//    ans.push(curr.val)
//    curr=curr.right
//  }
//  return ans
};