// Write a program to concatenate an input of array of arrays

const ConcatenationOfArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((element) => {
      result.push(element);
    });
  }

  return result;
};

const concatenatedArray = ConcatenationOfArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log("Concatenation of input of array of arrays : " + concatenatedArray);
