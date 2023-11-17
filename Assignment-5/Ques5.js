// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const flattenObject = (obj) => {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      const innerObj = flattenObject(obj[key]);

      for (let innerObjKey in innerObj) {
        result[`${key}.${innerObjKey}`] = innerObj[innerObjKey];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};
const obj = {
  a: 1,
  b: { c: 6, d: [3, 4] },
};

const flattenedObject = flattenObject(obj);

console.log(flattenObject);
