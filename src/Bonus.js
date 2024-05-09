/* eslint-disable class-methods-use-this */
const { ERROR_MESSAGE } = require('./constants/Message');
const { LOTTO } = require('./constants/Constants');

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, winningNumber) {
    this.validate(bonusNumber, winningNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  validate(bonusNumber, winningNumber) {
    const parseNumber = Number(bonusNumber);
    this.checkNunNumber(parseNumber);
    this.checkBonusRange(parseNumber);
  }

  checkNunNumber(parseNumber) {
    if (Number.isNaN(parseNumber)) {
      throw new Error(ERROR_MESSAGE.non_numeric_bonus);
    }
  }

  checkBonusRange(parseNumber) {
    if (parseNumber < LOTTO.minimum || parseNumber > LOTTO.maximum) {
      throw new Error(ERROR_MESSAGE.out_of_range_bonus);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
