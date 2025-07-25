/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     let a={}
     for( let i=0; i<nums.length;i++){
        if(!a[nums[i]]){
            a[nums[i]]=1;
        } else{
                 a[nums[i]]++;
        }
     } 
      for( let i=0; i<nums.length;i++){
        if(a[nums[i]]==1){
            return nums[i];
        }
      }


};


var singleNumber = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;
};
