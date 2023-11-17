// Write a program to find sum of an array

const findSumOfArray = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

const sumOfElements = findSumOfArray([1, 2, 3, 4, 5]);
console.log("Sum of elements of array is : " + sumOfElements);
