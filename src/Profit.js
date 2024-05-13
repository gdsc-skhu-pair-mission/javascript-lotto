import { LOTTO_RESULT, MONEY } from './constants/Constants.js';

class Profit {
  constructor(rankResults, numberOfLottos) {
    this.rankResults = rankResults;
    this.numberOfLottos = numberOfLottos;
    this.lottoPrice = MONEY.unit;
    this.totalCost = this.numberOfLottos * this.lottoPrice;
  }

  calculateTotalPrize() {
    let totalPrize = 0;
    Object.keys(this.rankResults).forEach((rank) => {
      totalPrize += this.rankResults[rank] * LOTTO_RESULT[rank].prize;
    });
    return totalPrize;
  }

  calculateProfitRate() {
    const totalPrize = this.calculateTotalPrize();
    const profit = (totalPrize / this.totalCost) * MONEY.hundred;
    return Number(profit.toFixed(1)).toLocaleString();
  }
}

export default Profit;
