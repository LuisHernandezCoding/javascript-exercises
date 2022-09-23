const palindromes = function (str) {
    const normalWord = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    const inverseWord = normalWord.split('').reverse().join('')
    if (normalWord === inverseWord) return true; else return false
    
    /*
    const initialStr = str.split(' ').join('').split('.').join('').split('!').join('').split(',').join('').toLowerCase().split('');
    const reversedStr = str.split(' ').join('').split('.').join('').split('!').join('').split(',').join('').toLowerCase().split('').reverse()
    for (let i = 0; i < initialStr.length / 2; i++) {
        if (initialStr[i] != reversedStr[i]) return false
    }
    return true
    */


}
// Do not edit below this line
module.exports = palindromes;
