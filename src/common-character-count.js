const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let bigArr 
  let smallArr 
  let counter = 0
  let arrA = s1.split('')
  let arrB = s2.split('')
  if (arrA.length > arrB.length) {
     bigArr = arrA
     smallArr = arrB
  } else {
     bigArr = arrB
     smallArr = arrA
  }
  for (let item of bigArr) {
    if (smallArr.includes(item)) {
      let index = smallArr.indexOf(item)
      if (index !== -1) {
        smallArr.splice(index, 1);
      }
      counter++
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
