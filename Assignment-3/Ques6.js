// Write a program to display prime numbers from 1 to 50

function isPrimeNumber(number) {
  let flag = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    return true;
  } else {
    return false;
  }
}

function printPrimeNumbers() {
  let primeNumbers = "";
  for (let i = 1; i <= 50; i++) {
    if (isPrimeNumber(i)) {
      primeNumbers += i + " ";
    }
  }
  console.log("Prime Numbers are: " + primeNumbers);
}
printPrimeNumbers();
