// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const convertToCamelCase = (string) => {
  const str = string.toLowerCase();
  const words = str.split(" ");
  let camelCaseString = "";
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      camelCaseString += words[i];
    } else {
      const camelCaseWord = words[i][0].toUpperCase() + words[i].substring(1);
      camelCaseString += camelCaseWord;
    }
  }

  return camelCaseString;
};

const camelCaseString = convertToCamelCase("hello john doe");
console.log("String in Camel Case is : " + camelCaseString);
