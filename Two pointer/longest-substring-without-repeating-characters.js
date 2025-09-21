/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map={}
    let i=j=0;
    let max=0;
    for(let j=0; j<s.length;j++){
        console.log(map[s[j]]!=undefined)
        if(map[s[j]]!==undefined&& map[s[j]]>=i){
            i=map[s[j]]+1;
        }
            map[s[j]]=j
            let currW= j-i+1
            max=Math.max(currW,max)
            // console.log(max)
             
    }
 
    return max
};