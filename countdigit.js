// let n = 333;

function rr (n) {

    let count = 0;

    while (n > 0) {
        // n = n / 10
        n = Math.floor(n / 10);
        count++
    }
    return count;
}
// return count;
console.log(rr(7969))