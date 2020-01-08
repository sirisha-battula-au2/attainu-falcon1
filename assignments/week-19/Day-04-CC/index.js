//BubbleSort

let myArray = [6,5,2,3,5,6,8,4,6];

function bubbleSort(arr) {
  for(let i=0; i <= arr.length; i++){

    for(let j=0; j<=arr.length-i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  
  return arr;

}

console.log(bubbleSort(myArray));

//SelectionSort

function selSort(arr) {
  for(var i=0; i<arr.length; i++) {
    var min=1;
    for(var j=i+1; j<arr.length; j++) {
      if(arr[j]<arr[min]) {
        min = j;
      }
    }
  var temp = arr[i];
  arr[i] = arr[min];
  arr[min]=temp;    


    }

    return arr;
  }

  selSort([2,4,1,7,4,8,9,9,4,3,6])