// Write a program to display intersection of two array

const intersectionOfArray = (arr1, arr2) => {
  return arr2.filter((element) => arr1.includes(element));
};
const intersection = intersectionOfArray([1, 2, 3], [3, 4, 5]);
console.log("Intersection of two array is : " + intersection);
