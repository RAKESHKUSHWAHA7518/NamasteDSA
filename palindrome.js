function palindrone(n) {

    let reverse = "";
    let o = n;
    while (n > 0) {
        reverse += n % 10;
        n =  Math.floor(n / 10);  
    }
    console.log(reverse) 
    if (o == reverse) {
        return "palindrome"
    } else {
        return " not palindrome"
    }
    
}


console.log(palindrone(12345))


var isPalindrome = function(n) {
      let reverse = 0;

    let o = n;
    while (n > 0) {
        rev = n % 10;
        reverse= reverse*10+rev;
        n =  Math.floor(n / 10);  
    }
     
       return o === reverse
       
};