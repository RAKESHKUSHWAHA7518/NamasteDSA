/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //    let stack = [];
    // let map = {
    //     ')': '(',
    //     '}': '{',
    //     ']': '['
    // };

    // for (let ch of s) {
    //     if (ch === '(' || ch === '{' || ch === '[') {
    //         stack.push(ch);
    //     } else {
    //         if (stack.length === 0 || stack.pop() !== map[ch]) {
    //             return false;
    //         }
    //     }
    // }
    // return stack.length === 0;
    // let stack = [];
    // let map = {
    //     ')': '(',
    //     ']': '[',
    //     '}': '{'
    // };

    // for (let i = 0; i < s.length; i++) {
    //     let ch = s[i];

    //     if (ch === '(' || ch === '[' || ch === '{') {
    //         stack.push(ch);
    //     } else {
    //         if (stack.length === 0 || stack.pop() !== map[ch]) {
    //             return false;
    //         }
    //     }
    // }

    // return stack.length === 0;


     let stack = [];

    // Map closing brackets to their corresponding opening brackets
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            let top = stack.pop();
            if (top !== map[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};