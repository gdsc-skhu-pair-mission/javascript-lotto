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
    if (matchNumber === 5) {
      if (lotto.includes(this.bonusNumber)) {
        this.#results[matchNumber]--;
        this.#results['5+1']++;
      }
    }
  }

  getResult() {
    return this.#results;
  }
}

export default Statistics;
