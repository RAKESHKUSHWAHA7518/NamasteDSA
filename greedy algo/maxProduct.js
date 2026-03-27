/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let maxproduct=nums[0];
   let minproduct= nums[0];
   let totalmaxproduct=nums[0];

   for( i=1;i<nums.length;i++) {
    let copymaxproduct=maxproduct;
    maxproduct=Math.max(nums[i],maxproduct*nums[i],minproduct*nums[i])
    minproduct=Math.min(nums[i],copymaxproduct*nums[i],minproduct*nums[i])

    totalmaxproduct=Math.max(totalmaxproduct,maxproduct)
   }

   return totalmaxproduct;


};



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
   let n = arr.length; 
    let ltrProd = 1, rtlProd = 1;
    let finalMax = -Infinity;

    for (let i = 0; i < n; i++) {
        ltrProd = ltrProd * arr[i];
        rtlProd = rtlProd * arr[n - i - 1];

        finalMax = Math.max(finalMax, ltrProd, rtlProd);

        if (ltrProd === 0) ltrProd = 1;
        if (rtlProd === 0) rtlProd = 1;
    }

    return finalMax;


};