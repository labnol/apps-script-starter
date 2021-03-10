/* Array functions */
const numbers = [10, 20, 30];

/* Print the nubmers */
numbers.forEach((number) => {
  Logger.log(number);
});

/* Double the numbers */
const doubleIt = numbers.map((number) => number * 2);
Logger.log(doubleIt);

/* Only numbers > 10 */
const bigNumbers = numbers.filter((number) => number > 10);
Logger.log(bigNumbers);

/* Add the numbers */
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
Logger.log(`The sum of ${numbers.join(', ')} is ${sum}`);

/* Remove duplicates with reduce */
const arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const result = arr.sort().reduce((accumulator, current) => {
  const { length } = accumulator;
  if (length === 0 || accumulator[length - 1] !== current) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
Logger.log(result); // [1,2,3,4,5]
