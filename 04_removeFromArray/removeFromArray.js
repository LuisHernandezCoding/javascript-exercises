const removeFromArray = function(inputArray, ...args) {
    console.log('Input Array: ' + inputArray)

    let outputArray = inputArray.filter(x => !args.includes(x))

    console.log('Output Array: ' + outputArray)
    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
