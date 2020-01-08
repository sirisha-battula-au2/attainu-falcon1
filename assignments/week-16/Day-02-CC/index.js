let a = [[1,1,1,1,], [2,2,2,2], [3,3,3,3], [4,4,4,4]];
let b =  [[1,1,1,1,], [2,2,2,2], [3,3,3,3], [4,4,4,4]];

let result = [];

let newArr = [];

let addMatrix = (a,b) => {
    for(let i=0; i<a.length; i++) {
        if(a.length != b.length) {
            return console.log("Array not Equal");

        }else {
            if(a[i].length != b[i].length) {
                return console.log(`${a[i]} and ${b[i]}does not contain same no. of elements`);
            }else {
                for(let j=0;j<a[i].length; j++) {
                    newArr.push(a[i][j] + b[i][j]);
                }

                result.push(newArr);
            }
        }
        newArr=[];
    }
    console.log(result);

}


addMatrix(a,b);