/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map={}
    for( let i=0; i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1;
        }else{
            map[s[i]]++;
        }
    }
let arr=['a','e','i','o','u']
    let maxval=0;
    let maxconst=0;

    for( let i=0; i<s.length; i++){
         if(arr.includes(s[i])){
             if(map[s[i]]>maxval){
                maxval=map[s[i]];
             }
         }else {
          if(map[s[i]]>maxconst){
                maxconst=map[s[i]];
             }
         }
    }

    return maxval+maxconst;

};