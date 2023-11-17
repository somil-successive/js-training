// Write a program to find index of duplicate elements in an array

const indexOfDuplicateElements = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      const newValue = map.get(arr[i]) + i;
      map.set(arr[i], newValue);
    } else {
      map.set(arr[i], i + " ");
    }
  }
  return map;
};

const duplicateIndices = indexOfDuplicateElements([1, 2, 3, 1, 2, 3]);
console.log(duplicateIndices);
