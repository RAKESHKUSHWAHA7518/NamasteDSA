/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=0;
        let r=n;
        let bad=0
        while(l<=r){
            let m =l+ Math.floor((r-l)/2)
             let res=isBadVersion(m)
             if(res==false){
                l=m+1
               

             } else{
                r=m-1;
                bad=m
             }
        }
         return bad;
    };
    
};