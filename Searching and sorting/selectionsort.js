
// let arr= [5,9,2,1,7,0,45,23]
// function selectionsort(a) {
//     let n = a.length;
//     let min = 0

//     for (let i = 0; i < n; i++){
//         min = i

//         for (let j = i + 1; j < n; j++){
//             if (a[min] > a[j]) {
//                 min = j;
//             }
               
//         }
//         let temp = a[i];
//         a[i] = a[min];
//         a[min] = temp;
//     }

//    return arr
// }

// console.log(selectionsort(arr))


// improve method


let arr= [5,9,2,1,7,0,45,23]
function selectionsort(a) {
    let n = a.length;
    let min = 0

    for (let i = 0; i < n; i++){
        min = i

        for (let j = i + 1; j < n; j++){
            if (a[min] > a[j]) {
                min = j;
            }
               
        }
        if (min != i) {
            let temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }

   return arr
}

console.log(selectionsort(arr))