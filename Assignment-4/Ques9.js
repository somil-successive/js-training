// Write a program to find the last duplicate index in an array

const lastDuplicateIndex = (arr) => {
  const map = new Map();
  arr.forEach((element, index) => {
    if (map.has(element)) {
      map.set(element, index);
    } else {
      map.set(element, -1);
    }
  });
  map.forEach((value, key) => {
    if (value === -1) {
      map.delete(key);
    }
  });

  return map;
};

const lastDuplicateIndices = lastDuplicateIndex([1, 2, 3, 2, 4, 5, 3]);
console.log(lastDuplicateIndices);
