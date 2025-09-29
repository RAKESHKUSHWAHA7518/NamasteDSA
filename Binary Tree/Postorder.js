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
var postorderTraversal = function(root) {
    let ans=[]
    function Traversal(val){
        if(!val) return 
   
 
   
 
  
//  ans.push(val.val)
   Traversal(val.left)
    
    Traversal(val.right)
     ans.push(val.val)
    }

    Traversal(root)

    return ans

    // ilterative solution
    // 
// let s1=[root]
// let s2=[]
// let ans=[];

// if(!root) return ans
// while(s1.length){
//   let  curr=s1.pop()
//     s2.push(curr)
//    curr.left && s1.push(curr.left)
//   curr.right  &&  s1.push(curr.right)
   
// }
// while(s2.length){
// ans.push(s2.pop().val)
// }
// return ans

// one stack solutions

// let stack=[];
// let ans=[]
// let curr=root;
// let lastVisted;
// while(curr||stack.length){
//     while(curr){
//         stack.push(curr)
//         curr= curr.left
//     }
//     let peekNode=stack[stack.length-1]
//     if(peekNode.right && peekNode.right!=lastVisted){
//         curr=peekNode.right
//     } else {
//         ans.push(peekNode.val)
//         lastVisted=stack.pop()
//     }
// }
// return ans
};