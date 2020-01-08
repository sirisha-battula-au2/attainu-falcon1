let previous = 0;
const duplicate = arr => {
  let array = [];

  for(let i=0; i< arr.length; i++){
    if(arr[i] == previous) {
      continue;
    }
    previous = arr[i];
    array.push(arr[i]);

  }
  return array;
}

console.log(duplicate([1,2,2,3,4,5,6,6,6,7,7,8,9]));