// Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

function printTwiceSeries() {
  let series = "";
  for (let i = 2; i <= 4096; i *= 2) {
    series += i + " ";
  }
  return series;
}
const output = printTwiceSeries();
console.log(output);
