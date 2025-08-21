/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(s) {
    //  for (let i = num.length - 1; i >= 0; i--) {
    //     if (parseInt(num[i]) % 2 === 1) {
    //         return num.substring(0, i + 1);
    //     }
    // }
    // return "";

     let n = s.length - 1;
  while (n >= 0) {
    if (Number(s[n]) % 2 == 1) {
      return s.substring(0, n + 1);
    }
    --n;
  }
  return "";
    
};