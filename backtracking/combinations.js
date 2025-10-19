/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
   let result =[]
   let backtraking=(path,start)=>{
    if(path.length==k){
        result.push([...path])
        return
    }
     for (let i=start;i<=n;i++){
        path.push(i)
        backtraking(path,i+1)
        path.pop()
     }

   } 

   backtraking([],1)
   return result;
};