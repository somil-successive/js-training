// Write a function expression that takes in another function as an argument

function getName(name) {
  return name;
}

function greetPerson(getName, name) {
  return "Welcome " + getName(name);
}
const message = greetPerson(getName, "Somil");
console.log(message);
