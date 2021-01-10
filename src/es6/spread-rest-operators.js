const animals = ['Monkey', 'Lion', 'Zebra'];
const birds = ['Sparrow', 'Pigeon', 'Parrot'];
const species = [...animals, ...birds];
Logger.log(species);

const person = {
  name: 'Amit Agarwal',
  email: 'amit@labnol.org',
};

const website = {
  url: 'https://digitalinspiration.com/',
};

const personDetails = {
  ...person,
  ...website,
  twitter: '@labnol',
};
Logger.log(personDetails);

/* Update the email address only */
const emailUpdated = {
  ...personDetails,
  email: 'email@example.com',
};
Logger.log(emailUpdated);

const stack = [
  'Google Apps Script',
  'JavaScript',
  'Firebase',
  'Node.js',
  'Webpack',
  'Babel',
];

const [gas, js, ...others] = stack;

Logger.log(`${gas} is similar to ${js}`);
Logger.log(others);

const newPerson = {
  name: 'Amit Agarwal',
  email: 'amit@labnol.org',
  website: 'https://digitalinspiration.com/',
};

const { name, age = 'unknown' } = newPerson;
Logger.log(`${name} is ${age} years old`);
