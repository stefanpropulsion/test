class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    fullName = Person.firstname + ' ' + Person.lastname;
    return 'Dog';
  }

}

console.log(new Person('Pera', 'Peric').getFullName());