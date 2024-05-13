import { LOTTO_RESULT } from './constants/Constants.js';

class Statistics {
  #results = { 3: 0, 4: 0, 5: 0, '5+1': 0, 6: 0 };

  constructor(lottos, winningNumber, bonusNumber) {
    this.lottos = lottos;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    // this.#statistics = statistics;
  }

  main() {
    this.calculateResult();
  }

  calculateResult() {
    this.lottos.forEach((lotto) => {
      const matchNumber = lotto.filter((number) =>
        this.winningNumber.includes(number),
      ).length;
      this.calculateRank(matchNumber, lotto);
    });
  }

  calculateRank(matchNumber, lotto) {
    if (matchNumber >= 3) {
      this.#results[matchNumber]++;
    }
    if (matchNumber === 5 && lotto.includes(this.bonusNumber)) {
      this.#results[matchNumber]--;
      this.#results['5+1']++;
    }
  }

  calculateRate(inputAmount) {
    let sum = 0;
    Object.values(LOTTO_RESULT).forEach((value) => {
      sum += value.prize * this.#results[value.match];
    });

    const result = Math.round((sum / inputAmount) * 1000) / 10; // 소숫점 둘째 자리에서 반올림(*1000), 퍼센트로 표현(/10)
    if (result % 1 !== 0) {
      return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.0';
  }

  getResult() {
    return this.#results;
  }
}

export default Statistics;
