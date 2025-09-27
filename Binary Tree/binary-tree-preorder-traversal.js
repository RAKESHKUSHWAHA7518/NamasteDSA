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
var preorderTraversal = function(root) {
    let ans=[]
    function Traversal(val){
        if(!val) return 
   ans.push(val.val)
 Traversal(val.left)
 Traversal(val.right)
    }

    Traversal(root)

    return ans
    

    // ilterative solution
//     let ans=[]
// let stack=[root]
// if(!root) return ans
// while(stack.length>0){

//     curr=stack.pop()
//     ans.push(curr.val)
//    curr.right && stack.push(curr.right)
//   curr.left &&  stack.push(curr.left)

// }

// return ans
    
};