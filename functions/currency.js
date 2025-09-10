/**
 * Converts US Dollars (USD) to Indian Rupees (INR).
 * Supports single cells or ranges and validates inputs.
 *
 * @param {number|number[][]} dollarsOrRange A dollar value or a range of dollar values.
 * @return {number|number[][]} The converted value(s) in INR, rounded to 2 decimals. Non-numeric cells return blank.
 * @customfunction
 */
function USDTOINR(dollarsOrRange) {
  var EXCHANGE_RATE_USD_TO_INR = 86; // Update as needed

  function toNumberOrBlank(value) {
    var n = Number(value);
    if (!isFinite(n)) {
      return '';
    }
    // Round to 2 decimals to avoid floating point artifacts
    return Math.round(n * EXCHANGE_RATE_USD_TO_INR * 100) / 100;
  }

  function mapDeep(value, mapper) {
    if (Array.isArray(value)) {
      return value.map(function (inner) {
        return mapDeep(inner, mapper);
      });
    }
    return mapper(value);
  }

  return mapDeep(dollarsOrRange, toNumberOrBlank);
}
