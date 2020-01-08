//Given an array, check if the given array represents a binary max-heap.

function isHeap(arr, i) {
    n = arr.length - 1;
    if (i > (n - 2) / 2) {
      return true;
    }
    if (
      arr[i] >= arr[2 * i + 1] &&
      arr[i] >= arr[2 * i + 2] &&
      isHeap(arr, 2 * i + 1, n) &&
      isHeap(arr, 2 * i + 2, n)
    ) {
      return true;
    }
    return false;
  }
  console.log(isHeap([90, 15, 10, 7, 12, 2], 0));
  console.log(isHeap([9, 15, 10, 7, 12, 11],0));