const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  elements: [],

  getLength() {
    return this.elements.length
  },
  addLink(value) {
    this.elements.push(value)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.elements.length) {
      this.elements = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.elements = this.elements.filter( (item, i) => i != position - 1)
    return this
  },
  reverseChain() {
    this.elements = this.elements.reverse()
    return this
  },
  finishChain() {
    let output = ''
    output += `( ${this.elements[0]} )`;
    for (let item of this.elements.slice(1)) {
        output += `~~( ${item} )`;
    }
    this.elements = []
    return output
  }
};

module.exports = {
  chainMaker
};
