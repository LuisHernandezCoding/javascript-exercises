const fibonacci = function(n) {
    
    /*
    let oldNumber = 1, actualNumber = 1, finalNumber = 1
    if (n < 0) return 'OOPS'
    for (let i = 1; i < n; i++) {
        if (i >= 2){
            oldNumber = finalNumber
            finalNumber += actualNumber
            actualNumber = oldNumber
        }        
    }
    return finalNumber
    */

    let numbersArray = [0, 1, 1]
    if (n < 0) return 'OOPS'
    for (let i = 0; i < n; i++) { 
        if (i >= 2){numbersArray.push(numbersArray[i] + numbersArray[i-1])}
    }
    return numbersArray[n]
};

// Do not edit below this line
module.exports = fibonacci;
