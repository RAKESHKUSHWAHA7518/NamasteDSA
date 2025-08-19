/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredArr = '';
    let rev='';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            // filteredArr.push(s[i]);
            filteredArr= filteredArr+ s[i];
             rev=s[i]+ rev ;
        }
    }
    
    // let filteredString = filteredArr.join("");
    // let rev = filteredArr.slice().reverse().join("");
    
    return filteredArr === rev; 
};