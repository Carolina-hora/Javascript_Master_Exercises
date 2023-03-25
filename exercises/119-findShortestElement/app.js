 function findShortestElement(arr) {
    // your code here
    let auxShortest = "10000000000000000000000000000000";
 if (arr.length !==0) {
     for (let i = 0; i < arr.length; i++){
         if (arr[i].length < auxShortest.length) auxShortest = arr[i]; 

     }
     return auxShortest;
      }
  return ""
 }

//  function findShortestElement(arr) {
//     // your code here
//     let aux = '99999999999999999999999999999999999999999999999';
//     if (arr.length < 1) return '';
//     for (let e of arr) {
//       if (e.length < aux.length) aux = e;
//     }
//     return aux;
//   }

let output = findShortestElement(['al', 'ol', 'two', 'three', 'a', 'o']);
console.log(output); // --> 'a'