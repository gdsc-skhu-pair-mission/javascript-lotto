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
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkNunNumber(numbers) {
    numbers.forEach((number) => {
      const parseNumber = Number(number);
      if (Number.isNaN(parseNumber)) {
        throw new Error('[ERROR] 숫자가 아닌 값을 입력하실 수 없습니다.');
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkLottoRange(numbers) {
    numbers.forEach((number) => {
      const parseNumber = Number(number);
      if (parseNumber < 1 || parseNumber > 45) {
        throw new Error('[ERROR] 로또 당첨번호는 1부터 45 사이입니다.');
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkDuplicateNumber(numbers) {
    const dedupeNumber = new Set(numbers);
    if (dedupeNumber.size !== numbers.length) {
      throw new Error('[ERROR] 당첨번호는 중복된 값이 없습니다.');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkEmpty(numbers) {
    if (numbers.some((item) => item === undefined)) {
      throw new Error('[ERROR] 당첨번호는 중복된 값이 없습니다.');
    }
  }
}

export default Lotto;
