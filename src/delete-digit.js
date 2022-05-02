const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxNumber = 0
  let arr = (n+'').split('')
  for (let i=0;i<arr.length; i++ ){
    let copyArr =  [...arr]
    copyArr.splice(i, 1)
    let number = copyArr.join('') - 0
    if (number > maxNumber) {
      maxNumber = number
    } 
  }
  return maxNumber
}

module.exports = {
  deleteDigit
};
