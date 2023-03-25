function getLastElement(array) {
  // Add your code after this line
  if (array.length !==0) {
    return array[array.length-1];
  }
  return undefined;
}

let output = getLastElement([1, 2, 3, 4]);
console.log(output);
