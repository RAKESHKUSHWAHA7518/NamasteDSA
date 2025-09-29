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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans=[];
      if (!root) return [];
    let q=[root]
    while(q.length){
        let levelArr=[]
        let levelSize=q.length
        

    
     for(let i=0;i<levelSize;i++){
         let curr=q.shift()
    curr.left && q.push(curr.left)
    curr.right && q.push(curr.right)
            levelArr.push(curr.val)
        }
    ans.push(levelArr)

    }
    return ans
    

    // recursive solution

//     let ans=[]
//     function Traversal(val,level){ 
//         if(!val) return 
//         if(!ans[level]) ans[level]=[]
//         ans[level].push(val.val)
//         Traversal(val.left,level+1)
//         Traversal(val.right,level+1)
//     }
//     Traversal(root,0)
//     return ans
};