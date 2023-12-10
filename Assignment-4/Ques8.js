// Write a program to remove dupliacte elements from an array

const removeDuplicateElements = (arr) => {
  const uniqueArray = [];
  arr.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
};

const uniqueElements = removeDuplicateElements([1, 1, 2, 3, 2, 3]);
console.log("Array after removing duplicates is : " + uniqueElements);
