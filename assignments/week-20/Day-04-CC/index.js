//Javascript function that prints the frequency of all the elements in an array.

var arr = [10, 20, 20, 10, 10, 20, 5, 20];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[10], counts[20], counts[5]);