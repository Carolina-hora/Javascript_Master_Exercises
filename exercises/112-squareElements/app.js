function squareElements(arr) {
  // your code here
  if (arr.length !==0) {
    return arr.map(el => el*el);
  }
  return []
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]