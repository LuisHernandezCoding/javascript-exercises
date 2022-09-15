const reverseString = function(str) {
    // 
    let reversedString = ''
    let charactersArray = []
    for (let i = 0; i < str.length; i++) {
        charactersArray.push(str.toString().charAt(i))
    }
    charactersArray.reverse()
    for (let i = 0; i < str.length; i++) {
        reversedString += charactersArray[i]        
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
