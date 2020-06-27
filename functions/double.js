/**
 * Multiplies the input value by 2.
 *
 * @param {number} input The value or range of cells to multiply.
 * @return The input multiplied by 2.
 * @customfunction
 */
function DOUBLE(input) {
    if (input.map) {
        return input.map(DOUBLE); // Recurse over array if so.
    } else {
        return input * 2;
    }
}


