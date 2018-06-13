const ONE_SECOND = 1000;
const START_TIME = Date.now();

export const expBackoff = func => {
  for (let n = 0; n < 6; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === 5) {
        throw e;
      }
      Utilities.sleep(2 ** n * ONE_SECOND + Math.round(Math.random() * ONE_SECOND));
    }
  }
  return null;
};

export function hasCpuTime() {
  return !(Date.now() - START_TIME > ONE_SECOND * 60 * 4);
}
