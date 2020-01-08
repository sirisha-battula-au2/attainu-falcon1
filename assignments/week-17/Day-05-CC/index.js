// Javascript function that merges these two arrays maintaining the sorted order.

const mergeSort = (a,b) => {
    let mergedArray = [];

    while(a.length && b.length) {
        let smallest;

        a[0] < b[0] ? smallest = a.shift() : smallest = b.shift();

        mergedArray.push(smallest);
    }

    if(a.length) {
        mergedArray = mergedArray.concat(a);
    }
    if(b.length) {
        mergedArray = mergedArray.concat(b);
    }

    return mergedArray;

    }



const main = (a,b) => {

    
    let mergedArrays = mergeSort(a,b);

    return mergedArrays;

}

let a = [2,16,18,29,35,46,78,90,100];
let b = [3,5,7,12,19,89,88,45,34];

console.log(main(a,b));