const { ERROR_MESSAGE } = require('./constants/Message');

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, winningNumber) {
    this.validate(bonusNumber, winningNumber);
    this.#bonusNumber = bonusNumber;
  }

  validate(bonusNumber, winningNumber) {
    const parseNumber = Number(bonusNumber);
    this.checkNunNumber(parseNumber);
  }

  checkNunNumber(parseNumber) {
    if (Number.isNaN(parseNumber)) {
      throw new Error(ERROR_MESSAGE.non_numeric_bonus);
    }
  }
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
