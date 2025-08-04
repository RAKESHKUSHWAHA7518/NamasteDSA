/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map=new Set();
    let inter=new Set()
    for( let i=0;i<nums2.length;i++){
        map.add(nums2[i]);
    }

    for(let j=0;j<nums1.length;j++){
     if( map.has(nums1[j])){
      inter.add(nums1[j])
      }
    }


    return Array.from(inter);
    
};