// JavaScript Document

//Create a Person class
class Person {
  // The constructor is a method for creating and initializing objects created within a class.
  // The constructor method is called automatically when a class is initiated
  constructor(name, age, gender, classes) {
    // initialize all properties
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  // The Person class has the greeting and bye methods.
  // When calling greetin or bye that will show in the console
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}


// instantiate two two Person instance
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);



// Create a class named Teacher which will inherit the methods from the Person class
// inherits all the methods from Person class
class Teacher extends Person {
  // The constructor is a method for creating and initializing objects created within a class.
  // The constructor method is called automatically when a class is initiated
  constructor(name, last, age, gender, interests, subject, grade) {
    // The super method refers to the parent(Person) class
    // and the method is in the constructor method. It gets access to the parent's properties and methods
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
    this.last = last; // I think I need to initialize last
  }
}

// instantiate a new Teacher instance
let kuan = new Teacher('Kuan-Wen', 'Liu', 30, 'male', ['JavaScript', 'PHP', 'Game'], 'Computer Programmer', '95');
