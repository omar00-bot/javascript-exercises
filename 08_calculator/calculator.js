const add = (...numbers) => {
  return numbers.reduce((total,num) => {
    return total+num
  },0);
};

const subtract = function(...numbers) {
	return numbers.reduce((total,num) => total-num,);
};

const sum = (sumNumbers) => {
  return sumNumbers.reduce((total,num) => total+num,0);
}


const multiply = function(multiplyNumbers) {
  return multiplyNumbers.reduce((total,num) => total*num,1)
};

const power = function(...numbers) {
  return numbers.reduce((total,num) => total**num);
};

const factorial = function(num) {
if(num === 1 || num === 0){
  return 1;
}	else {
  return num* factorial(num-1)
}
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
