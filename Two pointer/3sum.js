/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 

var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let ans=[]
    for( let i=0; i<nums.length;i++){
        if (i === 0 || nums[i] !== nums[i - 1]) {
            twoSum(nums,i,ans)
        }
    }
    return ans
};

 var twoSum = function(nums, x,ans) {
    // let j=nums.length-1

    // for(let i=0;i<=nums.length-1;){
    //     let sum =nums[i]+nums[j]
    //     if(sum>target){
    //         j--
    //     } else if( sum<target){
    //         i++
    //     }else {
    //         return [i+1,j+1]
    //     }
    // }

    let i=x+1;
    let j=nums.length-1
    while (i<j){
             let sum =nums[i]+nums[j] +nums[x]
        if(sum>0){
            j--
        } else if( sum<0){
            i++
        }else {
            // return [i+1,j+1]
            ans.push([nums[i],nums[j],nums[x]])
              ++i,--j
            while(i<j && nums[i]==nums[i-1]) i++
           
        }
    }
     
}; 