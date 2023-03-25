// Write your function here
const isEitherEven = (a, b)=> {
    return (a%2 ===0 || b%2 ===0);
}

let output = isEitherEven(1, 4);
console.log(output);

// OR:
//const isEitherEven = (a, b)=> {
//     if (a%2 ===0 || b%2 ===0) return true;
//      return false;
// }