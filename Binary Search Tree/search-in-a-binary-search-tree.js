// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} val
//  * @return {TreeNode}
//  */
// var searchBST = function(root, val) {
//     let ans=null
//      let Search =(curr,val)=>{
//          if(!curr) return []
//         if(curr.val==val){
//             ans=curr
//         }
//         Search(curr.left,val)
//         Search(curr.right,val)

//      }
//       Search(root,val)
//       return ans
// };

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans=null
     let Search =(curr,val)=>{
         if(!curr) return []
        if(curr.val==val){
            ans=curr
        }else if (curr.val>val) {
 Search(curr.left,val)
        } else {
 Search(curr.right,val)
        }

        
        

     }
      Search(root,val)
      return ans
};