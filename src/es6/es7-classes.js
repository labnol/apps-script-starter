class Person {
  name = 'Amit Agarwal';

  greet = () => `Hello ${this.name}!!`;

  getFirstName = () => {
    const [firstName] = this.name.split(' ');
    return firstName;
  };

  static country = 'India';

  static sayHello = () => {
    Logger.log('Hello World!!');
  };
}

const person = new Person();
Logger.log(person.getFirstName());
Logger.log(Person.country);

Person.sayHello();
