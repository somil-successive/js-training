// Write a program to iterate over object.

const iterationOverObject = (obj) => {
  let result = {};
  for (let key in obj) {
    value = obj[key];
    console.log(`${key} : ${value}`);
  }
};
iterationOverObject({ id: 1, name: "somil" });
