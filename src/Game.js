/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Purchase from './Purchase.js';
import Statistics from './Statistics.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoGenerator from './LottoGenerator.js';
import Profit from './Profit.js';

class Game {
  constructor() {
    this.purchase = ' ';
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.lottos = [];
  }

  async start() {
    await this.getPurchaseAmount();
    this.showLottoNumbers();
    await this.getWinningNumbers();
    await this.getBonusNumber();
    this.showStatistics();
    this.showProfit();
  }

  async getPurchaseAmount() {
    const inputUserMoney = await InputView.getInputMoney();
    this.purchase = new Purchase(inputUserMoney);
    OutputView.showLottoCount(this.purchase.getQuantity());
  }

  showLottoNumbers() {
    this.lottos = LottoGenerator.generate(this.purchase.getQuantity());
    this.lottos.forEach((lotto) => {
      OutputView.showLottoNumbers(lotto);
    });
  }

  async getWinningNumbers() {
    const inputWinningNumber = await InputView.getWinningNumbers();
    this.winningNumbers = new Lotto(inputWinningNumber).getLottoArray();
  }

  async getBonusNumber() {
    const inputBonusNumber = await InputView.getBonusNumber();
    this.bonusNumber = new Bonus(inputBonusNumber, this.winningNumbers).getBonusNumber();
  }

  showStatistics() {
    const statistics = new Statistics(this.lottos, this.winningNumbers, this.bonusNumber);
    const results = statistics.getResults();
    OutputView.showStatistics(results);
  }

  showProfit() {
    const statistics = new Statistics(this.lottos, this.winningNumbers, this.bonusNumber);
    const rankResults = statistics.getRankResults();
    const numberOfLottos = this.lottos.length;
    const profit = new Profit(rankResults, numberOfLottos);
    const profitRate = profit.calculateProfitRate();
    OutputView.showProfit(profitRate);
  }
}

export default Game;
