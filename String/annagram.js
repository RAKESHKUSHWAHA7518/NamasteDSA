/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 if(s.length!==t.length){
    return false
    }
 let has={}

 

 for( let i=0; i<s.length;i++){
    if(!has[s[i]]){
        has[s[i]]=1;
    }else {
         has[s[i]]++
    }
    
 }

   for( let i=0; i<t.length;i++){
    if(!has[t[i]]){
        // has[t[i]]=1;
        return false
    }else {
         has[t[i]]--
    }
    
 }

 return true





    // if(s.length!==t.length){
    // return false
    // }

    // for ( let i=0; i<s.length ;i++){
    //     if(s.includes(t[i])){
    //         return true
    //     }

    //      return false;
    // }

// let a=s.split("").sort().join();
// let b=t.split("").sort().join();
    
//     if(a==b){
//         return true
//     } else 
//     return false
};