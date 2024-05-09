const { ERROR_MESSAGE } = require('./constants/Message');
const { LOTTO } = require('./constants/Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLottoArrayLength(numbers);
    this.checkNunNumber(numbers);
    this.checkLottoRange(numbers);
    this.checkDuplicateNumber(numbers);
    this.checkEmpty(numbers);
  }

  // eslint-disable-next-line class-methods-use-this
  checkLottoArrayLength(numbers) {
    if (numbers.length !== LOTTO.length) {
      throw new Error(ERROR_MESSAGE.out_of_length_lotto);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkNunNumber(numbers) {
    numbers.forEach((number) => {
      const parseNumber = Number(number);
      if (Number.isNaN(parseNumber)) {
        throw new Error(ERROR_MESSAGE.non_numeric_lotto);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkLottoRange(numbers) {
    numbers.forEach((number) => {
      const parseNumber = Number(number);
      if (parseNumber < LOTTO.minimum || parseNumber > LOTTO.maximum) {
        throw new Error(ERROR_MESSAGE.out_of_range_lotto);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkDuplicateNumber(numbers) {
    const dedupeNumber = new Set(numbers);
    if (dedupeNumber.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicate_lotto);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  // checkEmpty(numbers) {
  //   if (numbers.some((item) => item.trim() === '')) {
  //     throw new Error('[ERROR] 당첨번호는 중복된 값이 없습니다.');
  //   }
  // }
}

module.exports = Lotto;
