const arr = [6, 8,14, 9, 3,52, 2,78, 7,89,102]

function negativenumber(arr) {
    let first = -Infinity, second = -Infinity;
    for (let a = 0; a < arr.length; a++){
        if (first < arr[a]) {
            second=first
            first = arr[a]
        } else if (second < arr[a] && arr[a]<first) {
            second=arr[a]

        }
           
            
       
    }  

    return second;

    
}

console.log(negativenumber(arr))
