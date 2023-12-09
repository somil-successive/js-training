// Write a program to reverse an array

const reversalOfArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
const reversedArray = reversalOfArray([1, 2, 3, 4, 5]);
console.log("Reverse of array is : " + reversedArray);
