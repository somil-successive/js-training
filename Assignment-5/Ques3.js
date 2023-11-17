// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const removeKeyFromObject = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    delete arr[i].id;
  }
  return arr;
};
const newArray = removeKeyFromObject([
  { name: "John", age: 27, id: 1 },
  { name: "Don", age: 25, id: 2 },
]);
console.log(newArray);
