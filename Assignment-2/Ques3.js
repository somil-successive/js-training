// Write a function expression that takes in another function as an argument

function getName() {
  return "Somil";
}

function greetPerson(getName) {
  return "Welcome " + getName();
}

const message = greetPerson(getName);
console.log(message);
