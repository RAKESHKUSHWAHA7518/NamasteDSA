/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
     let n = arr.length;
    let maxL=[]
     let maxR=[]
    maxL[0]=arr[0];
     maxR[n-1]=arr[n-1];
    for( let i=1; i<arr.length;i++){
   maxL[i]=Math.max(maxL[i-1],arr[i])
   maxR[n-i-1]=Math.max(arr[n-i-1],maxR[n-i])
    }

     
    
//     for( let i=n-2; i>=0;i--){
//    maxR[i]=Math.max(arr[i],maxR[i+1])
//     }
      console.log(maxL);
    console.log(maxR);
 let count=0
    for(let i=0 ;i<arr.length;i++){
        let maxV=Math.min(maxL[i],maxR[i])-arr[i]
        count=count+maxV 
    }
 
     return count;
 
};