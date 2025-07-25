

/**
 * Merge two sorted arrays into one, in-place.
 *
 * @param {Array<Number>} nums1 The first sorted array.
 * @param {Number} m The number of elements in nums1.
 * @param {Array<Number>} nums2 The second sorted array.
 * @param {Number} n The number of elements in nums2.
 */
var merge = function(nums1, m, nums2, n) {
    let xcopy = nums1.slice(0, m); // Copy only the first m elements of nums1
    let p1 = 0; // Pointer for xcopy
    let p2 = 0; // Pointer for nums2

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && xcopy[p1] < nums2[p2])) {
            nums1[i] = xcopy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
};


/**
 * Merge two sorted arrays into one, in-place.
 * 
 * This function merges the first `m` elements of the sorted array `nums1`
 * with the `n` elements of the sorted array `nums2`, modifying `nums1` 
 * in-place to contain the combined sorted elements. It assumes that 
 * `nums1` has enough space to hold the additional elements from `nums2`.
 * 
 * @param {Array<Number>} nums1 The first sorted array with enough space for merging.
 * @param {Number} m The number of elements initially present in `nums1`.
 * @param {Array<Number>} nums2 The second sorted array.
 * @param {Number} n The number of elements in `nums2`.
 */

var merge = function(nums1, m, nums2, n) {
    // let xcopy=nums1.slice(0,m);
    let p1=m-1;
    let p2=n-1;

    for ( let i=m+n-1; i>=0; i--){
         if (p2 < 0) break;
        if( p1>=0 &&   nums1[p1]>nums2[p2]){
            nums1[i]=nums1[p1];
            p1--;
        } else{
             nums1[i]=nums2[p2];
            p2--;
        }
    }




    
};






