function isOddLength(word){
    if (word.length %2 !== 0) return true;
    return false;
}

let output = isOddLength('special');
console.log(output);