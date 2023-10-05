// Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const sumOfNumbers = (firstNumber, secondNumber) => firstNumber + secondNumber;

const subtractionOfNumbers = (firstNumber, secondNumber) =>
  firstNumber - secondNumber;

const multiplicationOfNumbers = (firstNumber, secondNumber) =>
  firstNumber * secondNumber;

const divisionOfNumbers = (firstNumber, secondNumber) =>
  firstNumber / secondNumber;

function calculator(first, second, operator) {
  if (operator === "+") {
    return sumOfNumbers(first, second);
  } else if (operator === "-") {
    return subtractionOfNumbers(first, second);
  } else if (operator === "*") {
    return multiplicationOfNumbers(first, second);
  } else if (operator === "/") {
    return divisionOfNumbers(first, second);
  } else {
    return "Invalid";
  }
}

const result = calculator(2, 6, "*");
console.log(result);
