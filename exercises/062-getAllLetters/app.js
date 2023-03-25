function getAllLetters(str) {
    // your code here
    let strArray = []
    if (str.length !==0) {
        for (let i = 0; i < str.length; i++) {
            strArray.push(str.charAt(i));
        }
        return strArray;
    }
    return []
}

let output = getAllLetters('Radagast');
console.log(output);