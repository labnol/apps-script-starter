const person = {
  name: 'Amit Agarwal',
  website: 'https://digitalinspiration.com/',
  email: 'amit@labnol.org'
};

const { name, email } = person;
Logger.log(`${name}'s email address is ${email}`);

export default person;
