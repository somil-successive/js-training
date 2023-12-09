// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return this.firstName + this.lastName;
  }
  averageAge(array) {
    const total = array.reduce((sum, obj) => sum + obj.age, 0);
    return total / array.length;
  }
}
const obj1 = new Person("Somil", "Kaushik", 23);
const obj2 = new Person("Nikhil", "Maurya", 22);
const obj3 = new Person("Sanskar", "Mishra", 23);
const fullName = obj1.fullName();
const average = obj3.averageAge([obj1, obj2, obj3]);
console.log(fullName);
console.log(average);
