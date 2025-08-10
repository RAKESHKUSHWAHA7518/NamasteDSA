/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10) return num;
    return addDigits(add(num))
    
};

function add(num){
    if(num<10) return num;
    return num %10 +add(Math.floor(num/10));
}


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // if(num<10) return num;
    // return addDigits(add(num))
      if (num === 0) return 0;
    return 1 + (num - 1) % 9;
    
};

// function add(num){
//     if(num<10) return num;
//     return num %10 +add(Math.floor(num/10));
// }