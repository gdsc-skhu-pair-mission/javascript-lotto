/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { ERROR_MESSAGE } from './constants/Message.js';
import { MONEY } from './constants/Constants.js';

class Purchase {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    const number = Number(amount);
    this.checkNunNumber(amount);
    this.checkEmpty(amount);
    this.checkPositiveNumber(number);
    this.checkNotMultipleOfThousand(number);
  }

  checkNunNumber(amount) {
    if (Number.isNaN(amount)) {
      throw new Error(ERROR_MESSAGE.non_numeric_money);
    }
  }

  checkEmpty(amount) {
    if (amount.trim() === MONEY.blank) {
      throw new Error(ERROR_MESSAGE.empty_money);
    }
  }

  checkPositiveNumber(number) {
    if (number < MONEY.zero) {
      throw new Error(ERROR_MESSAGE.non_positive_money);
    }
  }

  checkNotMultipleOfThousand(number) {
    if (number % MONEY.unit !== MONEY.zero) {
      throw new Error(ERROR_MESSAGE.non_divisible_money);
    }
  }

  getQuantity() {
    return this.#amount / MONEY.unit;
  }
}

export default Purchase;
