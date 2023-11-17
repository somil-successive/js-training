// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const findCountOfVariables = (str) => {
  const count = new Map();
  for (let i = 0; i < str.length; i++) {
    if (count.has(str[i])) {
      count.set(str[i], count.get(str[i]) + 1);
    } else {
      count.set(str[i], 1);
    }
  }
  let result = "";
  count.forEach((value, key) => {
    result += key;
    result += value;
  });
  return result;
};

const countOfVariables = findCountOfVariables("abcabcdabbcc");
console.log("Count of each variables is: " + countOfVariables);
