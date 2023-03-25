function countCharacter(str, char) {
    // your code here
    let countChar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
         countChar++;
        }
    }
    return countChar;
}