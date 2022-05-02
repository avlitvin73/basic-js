const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  let prev 
  let next
  let outputArray = []
  if (arr) {
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === '--discard-next') {
        // i++
        continue
      } 
      if (arr[i] === '--discard-prev') {
        if (outputArray) {
          outputArray.pop()
          continue
        }
      }
      if (arr[i] === '--double-prev'){
        prev = outputArray[outputArray.length-1]
        if (prev) {
          outputArray.push(prev)
        }
        continue
      }
      if (arr[i] === '--double-next'){
        // for (let k=0; k<arr.length; k++) {
        //   if (arr[k] === '--discard-prev') {
        //     arr.splice(k-1, 1)
        //     i++
        //     break
        //   }
        // }
        next = arr[i+1]
        if (next) {
          outputArray.push(next)
        }
        continue
      }
      outputArray.push(arr[i])
    }
  }
  return outputArray
  
}

module.exports = {
  transform
};
