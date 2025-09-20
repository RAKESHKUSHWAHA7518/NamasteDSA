/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0;
    let j=height.length-1;
    let maxarea=0;
    while(i<j){
    let area=Math.min(height[i],height[j])*(j-i)
    maxarea=Math.max(area,maxarea)
    if(height[i]>height[j]){
        j--
    }else {
        i++
    }
    }
    return maxarea;
};