// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

function checkEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const result = checkEven(-4);
console.log(result);
