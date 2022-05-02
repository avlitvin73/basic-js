const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  if (date) {
    if (date instanceof Date) {
        let currentMonth = date.getMonth()
        if (currentMonth === 0 || currentMonth === 1 || currentMonth === 11) return 'winter'
        if (currentMonth === 2 || currentMonth === 3 || currentMonth === 4) return 'spring'
        if (currentMonth === 5 || currentMonth === 6 || currentMonth === 7) return 'summer'
        if (currentMonth === 8 || currentMonth === 9 || currentMonth === 10) return 'autumn'
    } else {
      return 'Error'
    }
  } else {
    return 'Unable to determine the time of year!'
  }
  return 'Invalid date!'

  
}

module.exports = {
  getSeason
};
