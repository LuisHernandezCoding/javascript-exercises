const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) { 
  if(array.reduce((a, b) => a + b, -1) === -1) return 0;
  else return array.reduce((a, b) => a + b)
//  let result = 0
//  for (let i = 0; i < array.length; i++) result += array[i]
//  return result  
};

const multiply = function(array) {
  if(array.reduce((a, b) => a * b, -1) === -1) return 0;
  else return array.reduce((a, b) => a * b)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  if (a === 0){
    return 1
  }
	return a * factorial(a-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
