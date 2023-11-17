// Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const sortArrayOfObject = (obj) => {
  obj.sort((item1, item2) => {
    return item1.age - item2.age;
  });
  return obj;
};
const sortedArray = sortArrayOfObject([
  { name: "Somil", age: 23 },
  { name: "kaushik", age: 20 },
]);
console.log("Sorted array is : " + sortedArray);
