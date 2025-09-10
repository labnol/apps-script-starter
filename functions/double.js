/**
 * Multiplies the input value by 2.
 *
 * @param {number|number[][]} input The value or range of cells to multiply.
 * @return {number|number[][]} The input multiplied by 2; non-numeric cells return blank.
 * @customfunction
 */
function DOUBLE(input) {
  function transform(value) {
    var n = Number(value);
    if (!isFinite(n)) {
      return '';
    }
    return n * 2;
  }

  function mapDeep(value, mapper) {
    if (Array.isArray(value)) {
      return value.map(function (inner) {
        return mapDeep(inner, mapper);
      });
    }
    return mapper(value);
  }

  return mapDeep(input, transform);
}
