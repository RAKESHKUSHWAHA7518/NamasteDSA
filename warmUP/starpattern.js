let n = 5;
let s = 1;

for (let i = 0; i < n; i++){
    let row = "";

  
    // for (let s = 0; s < n - i; s++){
    //     row = row + " ";
    // }
    for (let j = 0; j <= i; j++){
        // let a = (j+1) % 2
        row = row + " " + s;
        if (s == 1) {
            s=0
        } else {
            s=1
        }
        
    }
    console.log(row)
}