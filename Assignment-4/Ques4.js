// Write a program to convert given string to  lowerCase

const convertToLowerCase = (str) => {
  let lowerCaseString = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      lowerCaseString += String.fromCharCode(charCode + 32);
    } else {
      lowerCaseString += String.fromCharCode(charCode);
    }
  }
  return lowerCaseString;
};
const lowerCaseString = convertToLowerCase("ASDqdewA");
console.log("String in lowercase is : " + lowerCaseString);

// Write a program to convert given string to  upperCase

const convertToUpperCase = (str) => {
  let upperCaseString = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      upperCaseString += String.fromCharCode(charCode - 32);
    } else {
      upperCaseString += String.fromCharCode(charCode);
    }
  }
  return upperCaseString;
};

const upperCaseString = convertToUpperCase("assASD");
console.log("String in upper case is : " + upperCaseString);
