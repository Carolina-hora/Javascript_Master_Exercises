let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arr = obj.key;
    if (Array.isArray(arr) && arr.length !== 0) {
      arr.pop()
      return arr;
    }
    return [];
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]