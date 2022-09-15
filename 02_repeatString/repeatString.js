const repeatString = function(string, n) {
    if (n === 0) return ''
    else if (n < 0) return 'ERROR'

    if (string === '') return ''

    for (let i = 1; i < n; i++){
        string += 'hey'
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
