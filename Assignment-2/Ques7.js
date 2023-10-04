// ARROW FUNCTIONS:

// Write a function expression that takes in a number and returns its square.

const getSquare = (number) => number * number;
const output1 = getSquare(5);
console.log(output1);

// Write a function expression that takes in two numbers and returns their sum.

const findSum = (first, second) => first + second;
const output2 = findSum(2, 8);
console.log(output2);

// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checkEvenOrOdd = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
const output3 = checkEvenOrOdd(-5);
console.log(output3);
