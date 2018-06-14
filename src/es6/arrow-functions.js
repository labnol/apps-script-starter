const add = (a, b) => a + b;
Logger.log(`The sum of 2 and 3 is ${add(2, 3)}`);

const max = (a, b) => {
  if (a > b) return a;
  return b;
};
Logger.log(`The bigger of 10 and 12 is ${max(10, 12)}`);

/* default arguments in functions */
const multiply = (value, factor = 2) => value * factor;
Logger.log(`2*10 = ${multiply(2, 10)}`);
Logger.log(`3*2 = ${multiply(3, 2)}`);
