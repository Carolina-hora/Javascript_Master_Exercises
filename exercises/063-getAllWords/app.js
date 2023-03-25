function getAllWords(str) {
    // your code here
    if (str.length !== 0) {
        let strArray = str.split(" ")
        return strArray;   
        }
    
    return []
}
let output = getAllWords('Radagast the Brown');
console.log(output);