/* eslint-disable class-methods-use-this */
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
      throw new Error('[ERROR] 숫자가 아닌 값을 입력하실 수 없습니다.');
    }
  }

  checkEmpty(amount) {
    if (amount.trim() === '') {
      throw new Error('[ERROR] 공백을 입력하실 수 없습니다.');
    }
  }

  checkPositiveNumber(number) {
    if (number < 0) {
      throw new Error('[ERROR] 숫자가 0보다 작으면 안됩니다.');
    }
  }

  checkNotMultipleOfThousand(number) {
    if (number % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력하셔야 합니다.');
    }
  }

  getQuantity() {
    return this.#amount / 1000;
  }
}

module.exports = Purchase;
