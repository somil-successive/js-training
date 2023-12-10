// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `Hi, i am ${this.name} `;
  }
  farewell() {
    return `Goodbye Everyone!`;
  }
}
const personObj = new Person("Somil", 21, "Male", "Playing Cricket");
console.log(personObj.greeting());
console.log(personObj.farewell());

// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }
  greeting() {
    return `I am learning ${this.studies}`;
  }
}
const studentObj = new Student(
  "Somil",
  21,
  "Male",
  "Playing Cricket",
  "JavaScript"
);
console.log(studentObj.greeting());

// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    this.subjectsTaught = subjectsTaught;
  }
  farewell() {
    return `${this.name} teaches ${this.subjectsTaught}`;
  }
}
const teacher = new Teacher("Krishna", 26, "male", "teaching", "JavaScript");
console.log(teacher.farewell());
