// Write a program to print all even number first and then all odd numbers

function printEvenThenOdd(range) {
  let even = "";
  let odd = "";

  for (let i = 1; i <= range; i++) {
    if (i % 2 == 0) {
      even += i + " ";
    } else {
      odd += i + " ";
    }
  }

  const result = even + odd;

  return result;
}
