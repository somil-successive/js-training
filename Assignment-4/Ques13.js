// Write a program to return inverse of an array

const inverseOfArray = (arr) => {
  let inverse = [];
  arr.map((item, index) => {
    inverse[item] = index;
  });
  return inverse;
};

const inversedArray = inverseOfArray([1, 2, 3, 0]);
console.log("Inverse of an array is : " + inversedArray);
