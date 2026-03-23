function countVowels(str) {
    // Your implementation
    const matches = str.match(/[aeiou]/gi);
    
    // If matches are found, return the array's length. Otherwise, return 0.
    return matches ? matches.length : 0;
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels