// function bubble(arr) {
//     let n= arr.length
//     for (let i = 0; i < n - 1; i++){
//         for (let j = 0; j < n - 1 - i; j++){
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let arr=[3,1,0,5,8]
// let aa = bubble(arr);
// console.log(aa);


function bubble(arr) {
    let n= arr.length
    for (let i = 0; i < n - 1; i++){
        let isswaped = false;
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isswaped = false;
            }
        }
        if (!isswaped) break;
    }
    return arr;
}

let arr=[3,1,0,5,8]
let aa = bubble(arr);
console.log(aa);