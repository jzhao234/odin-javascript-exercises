const add = function(a, b) {
  return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(a) {
  let sum = 0;
  for( let i = 0; i < a.length; i++){
    sum = sum + a[i];
  }
  return sum;
};

const multiply = function(a) {
  let product = 0;

  if (a.length >= 2){
    product = a[0] * a[1];
  } else {
    return a[0];
  }
  for( let i = 2; i < a.length; i++){
    product = product * a[i];
  }
  return product;
};

const power = function(a, b) {
  let power = a; 
  for (let i = 1; i < b; i++){
    power = power * a;
  }
  return power;
};

const factorial = function(a) {
  if (a == 0){
    return 1;
  } else {
    let factorial = a;
    for (let i = 1; i < a; i++){
      factorial = factorial * (a-i);
    }
    return factorial;
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
