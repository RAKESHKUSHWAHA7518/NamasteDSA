/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    //  let L=0;
    //   let R=0;
    //   let count=0;
    //   for( let i=0; i<s.length;i++){
    //     if(s[i]==='R'){
    //        ++ R
    //     }else{
    //        ++ L
    //     }
    //     if(L===R){
    //         L=R=0;
    //         count++;
    //     }
    //   }

    //   return count;
      let balance = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            balance++;
        } else {
            balance--;
        }

        if (balance === 0) {
            count++;
        }
    }

    return count;
};