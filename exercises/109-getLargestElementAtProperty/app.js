let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    let arr = obj.key;
    let auxLargest = 0;
    if(Array.isArray(arr) && arr.length !==0) {
      for (let i = 0; i < arr.length; i++) {
        if (auxLargest < arr[i]) auxLargest=arr[i]
      }
      return auxLargest
    }
    return [];
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4