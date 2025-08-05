var lengthOfLastWord = function(s) {
    // Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the string by spaces
    let words = s.split(" ");
    
    // Get the last word and return its length
    return words[words.length - 1].length;
};
