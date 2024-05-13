import { LOTTO_RESULT } from './constants/Constants.js';

class Statistics {
  #results = {
    FIFTH: 0,
    FOURTH: 0,
    THIRD: 0,
    SECOND: 0,
    FIRST: 0,
  };

  constructor(lottos, winningNumbers, bonusNumber) {
    this.lottos = lottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.calculateResults();
  }

  calculateResults() {
    this.lottos.forEach((lotto) => {
      const matchCount = lotto.filter((num) => this.winningNumbers.includes(num)).length;
      const hasBonus = lotto.includes(this.bonusNumber);
      this.updateResults(matchCount, hasBonus);
    });
  }

  updateResults(matchCount, hasBonus) {
    switch (matchCount) {
      case 3:
        this.#results.FIFTH++;
        break;
      case 4:
        this.#results.FOURTH++;
        break;
      case 5:
        if (hasBonus) {
          this.#results.SECOND++;
        }
        this.#results.THIRD++;
        break;
      case 6:
        this.#results.FIRST++;
        break;
      default:
        break;
    }
  }

  formatResults() {
    const resultStrings = [];
    Object.entries(LOTTO_RESULT).forEach(([rank, { match, bonus, prize }]) => {
      const count = this.#results[rank];
      const message = `${match}개 일치${bonus ? ', 보너스 볼 일치' : ''} (${prize.toLocaleString()}원) - ${count}개`;
      resultStrings.push(message);
    });
    return resultStrings.join('\n');
  }

  getResults() {
    const formattedResults = this.formatResults();
    const resultsWithHeader = `\n당첨통계\n---\n${formattedResults}`;
    return resultsWithHeader;
  }

  getRankResults() {
    return this.#results;
  }
}

export default Statistics;
