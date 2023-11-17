// Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const reversalOfString = (str) => {
  const words = str.split(" ");
  let reversedString = "";
  words.forEach((word) => {
    let reverserdWord = word.split("").reverse().join("");
    reversedString += reverserdWord;
    reversedString += " ";
  });
  reversedString.trimEnd();
  return reversedString;
};

const reverse = reversalOfString("Hello John");
console.log("Reversed String is: " + reverse);
