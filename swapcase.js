function swapeCase(string) {
    let result = [];
    //Iterate over each character in the input string
    for (let i = 0; i < inputstring.length; i++) {
    
        if (str[i] === str[i].toUpperCase()) {
      // Convert uppercase character to lowercase and push to result array
            result.push(str[i].toLowerCase());
        } 
    
        else if (str[i] === str[i].toLowerCase()) {
    
            result.push(str[i].toUpperCase());
        } 
          // If the character is neither uppercase nor lowercase (e.g., special character), keep it unchanged
        else {
            result.push(str[i]);
        }
    }
    // Join the characters in the result array and return as a string
    return result.join('');
}
//Output tHE qUICK bROWN fOX
console.log(swapCase('The Quick Brown Fox'));
