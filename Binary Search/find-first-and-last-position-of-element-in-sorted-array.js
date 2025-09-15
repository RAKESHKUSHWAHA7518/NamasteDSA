/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
//     let l=0;
//     let r=nums.length-1;
//     let ans= [-1,-1]
//     while(l<r){
//         let m= l+Math.floor((r-l)/2)
//         if(target>nums[m]){
//             l=m+1
//         } else {
//             r=m
//         }
//     }
//     if(nums[l]==target){
//     ans[0]=l;
//     }
//      l=0;
//      r=nums.length-1;
//     while(l<r){
//         let m= l+Math.ceil((r-l)/2)
//         if(target<nums[m]){
//             r=m-1
//         } else {
//             l=m
//         }
//     }
//   if(nums[r]==target){
//     ans[1]=r;
//     }

//     return ans

 let l=0;
    let r=nums.length-1;
    let ans= [-1,-1]
    while(l<=r){
        let m= l+Math.floor((r-l)/2)
         if(target==nums[m]){
            ans[0]=m
            r=m-1
        }
       else 
        if(target>nums[m]){
            l=m+1
        } else {
            r=m-1
        }
    }
    
     l=0;
     r=nums.length-1;
    while(l<=r){
        let m= l+Math.ceil((r-l)/2)
         if(target==nums[m]){
            ans[1]=m
            l=m+1
        }
       else 
        if(target<nums[m]){
            r=m-1
        } else {
            l=m+1
        }
    }
   

    return ans
};