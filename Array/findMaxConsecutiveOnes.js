/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let c=0;
    let m=0;
    for( let i=0; i<nums.length;i++){
        if(nums[i]==1){
            c++;
            m=Math.max(m,c)
        } else{
            //   m=Math.max(m,c)
              c=0
        }
    }

    return m;

    
};