const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  num = Math.abs(n)
  let lastNum
  let output = 0
  while (num > 0) {
    lastNum = num % 10
    output += lastNum 
    num = Math.floor(num / 10)
  }
  if (output > 9) {
    return getSumOfDigits(output)
  }
  return output
  
}

module.exports = {
  getSumOfDigits
};
