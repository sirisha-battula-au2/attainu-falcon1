// MergeSort 

function merge(left,right){

    let merged = [];
    while(left.length && right.length) {
      let smallest;
    
      if(left[0] < right[0]) {
        smallest = left.shift();
    
      }else{
        smallest = right.shift();
    
      }
    
      merged.push(smallest);
    
    }
    
    if(left.length){
      merged = merged.concat(left);
    }
    
    if(right.length){
      merged = merged.concat(right);
    }
    return merged;
    
    }
    
    
    
    function mergeSort(arr) {
    
      if(arr.length ===1) {
        return arr;
      }
    
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle,arr.length);
    
    
    let sortedLeftArray = mergeSort(left);
    let sortedRightArray = mergeSort(right);
    
    
    return merge(sortedLeftArray,sortedRightArray);
    
    }
    
    let arr = [6,7,9,6,2,4,1,6,7,9,87];
    
    console.log(mergeSort(arr));