const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let output 
  let firstLettersArray = []
  if (Array.isArray(members)) {
    for (let member of members) {
      if (typeof(member) === 'string') {
        let name = member.trim()
        let letterName = name[0].toUpperCase()
        firstLettersArray.push(letterName)
      } 
    }
    firstLettersArray.sort()
    output = firstLettersArray.join('')
    return output
  }
  return false
}

module.exports = {
  createDreamTeam
};
