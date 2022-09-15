const sumAll = function(startNumber, endNumber) {
    if (startNumber < 0 || endNumber < 0 || 
        typeof startNumber !== "number" || 
        typeof endNumber !== "number") 
    return 'ERROR'
    let numberQuantity, lowerNumber
    if (startNumber < endNumber) { 
        numberQuantity = (endNumber - startNumber + 1)
        lowerNumber = startNumber
    }
    else {
        numberQuantity = (startNumber - endNumber + 1) 
        lowerNumber = endNumber
    }

    let sum = 0
    for (let i = 0; i < numberQuantity; i++) {
        (i === 0) ? sum = lowerNumber :        
        sum += (lowerNumber+i)
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
