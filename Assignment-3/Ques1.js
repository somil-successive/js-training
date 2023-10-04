// Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const sumOfNumbers = (a, b) => a + b;

const subtractionOfNumbers = (a, b) => a - b;

const multiplicationOfNumbers = (a, b) => a * b;

const divisionOfNumbers = (a, b) => a / b;

function calculator(first_number, second_number, operator) {
  if (operator === "+") {
    return sumOfNumbers(first_number, second_number);
  } else if (operator === "-") {
    return subtractionOfNumbers(first_number, second_number);
  } else if (operator === "*") {
    return multiplicationOfNumbers(first_number, second_number);
  } else if (operator === "/") {
    return divisionOfNumbers(first_number, second_number);
  } else {
    return "Invalid";
  }
}
