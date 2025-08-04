/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let map= {}
     let majorityCount = Math.floor(nums.length / 2);

     for( let i=0; i<nums.length;i++){
        let num= nums[i];
        if(map[num]===undefined){
            map[num]=1;
        }else{
            map[num]++;
        }
         if (map[num] > majorityCount) {
        return num;
    }
     }
    
};