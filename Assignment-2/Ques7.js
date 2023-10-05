// ARROW FUNCTIONS:

// Write a function expression that takes in a number and returns its square.

const getSquare = (number) => number * number;
const squareOfNumber = getSquare(-3);
console.log("Square of Number is: " + squareOfNumber);

// Write a function expression that takes in two numbers and returns their sum.

const computeSum = (first, second) => first + second;
const sumOfNumbers = computeSum(-3, +6);
console.log("Sum of number is: " + sumOfNumbers);

// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checkEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
const result = checkEven(-3);
console.log(result);
