function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = i - 1;

        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev]; // shift element
            prev--;
        }

        arr[prev + 1] = curr; // insert current element
    }

    return arr;
}

let arr = [3, 4, 5, 7, 1, 2];
let result = insertionSort(arr);
console.log(result.join(" "));
