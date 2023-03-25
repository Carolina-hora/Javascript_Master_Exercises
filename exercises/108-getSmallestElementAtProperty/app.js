let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    let arr = obj.key;
    let auxSmallest = 10000;
    if (Array.isArray(arr) && arr.length !==0) {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i]< auxSmallest) {
          auxSmallest = arr[i];
        }
      }
      return auxSmallest
    }
    return [];
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1