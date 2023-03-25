function getLargestElement(arr) {
  // your code here
  let auxLargest = 0;
  if (arr.length !==0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > auxLargest) auxLargest = arr[i];
    }
    return auxLargest;
  }
  return 0;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;