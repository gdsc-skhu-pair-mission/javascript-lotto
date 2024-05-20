/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { ERROR_MESSAGE } from './constants/Message.js';
import { LOTTO } from './constants/Constants.js';

class Lotto {
  #numbers;

  constructor(inputNumbers) {
    const numbers = this.changeStringToArray(inputNumbers);
    this.validate(numbers);
    this.#numbers = numbers;
  }

  changeStringToArray(inputNumbers) {
    let numbers = [];

    numbers = inputNumbers.split(',').map((number) => Number(number));

    return numbers;
  }

  validate(numbers) {
    this.checkLottoArrayLength(numbers);
    this.checkNunNumber(numbers);
    this.checkLottoRange(numbers);
    this.checkDuplicateNumber(numbers);
    // this.checkEmpty(numbers);
  }

  checkLottoArrayLength(numbers) {
    if (numbers.length !== LOTTO.length) {
      throw new Error(ERROR_MESSAGE.out_of_length_lotto);
    }
  }

  checkNunNumber(numbers) {
    numbers.forEach((number) => {
      const parseNumber = Number(number);
      if (Number.isNaN(parseNumber)) {
        throw new Error(ERROR_MESSAGE.non_numeric_lotto);
      }
    });
  }

  checkLottoRange(numbers) {
    numbers.forEach((number) => {
      const parseNumber = Number(number);
      if (parseNumber < LOTTO.minimum || parseNumber > LOTTO.maximum) {
        throw new Error(ERROR_MESSAGE.out_of_range_lotto);
      }
    });
  }

  checkDuplicateNumber(numbers) {
    const dedupeNumber = new Set(numbers);
    if (dedupeNumber.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicate_lotto);
    }
  }

  getLottoArray() {
    return this.#numbers;
  }
}

export default Lotto;
