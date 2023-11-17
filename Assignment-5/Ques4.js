// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const deepClone = (arr) => {
  const clone = { ...arr };
  return clone;
};
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(deepClone(myObj));
