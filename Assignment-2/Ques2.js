//  Write a program to take input(age, name, phone no.) from user and display it

function displayUserInformation(name, age, phone) {
  return "Name:" + name + " Age:" + age + " Phone Number: " + phone;
}

const information = displayUserInformation("Somil", 22, 9289819198);
console.log(information);
