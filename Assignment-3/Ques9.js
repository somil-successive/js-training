//  Write a program to print fibonaaci series

function printFibonacciSeries(range) {
  let first_term = 0;
  let second_term = 1;
  let third_term;
  console.log(first_term);
  console.log(second_term);
  for (let i = 2; i < range; i++) {
    third_term = first_term + second_term;
    console.log(third_term);
    first_term = second_term;
    second_term = third_term;
  }
}
