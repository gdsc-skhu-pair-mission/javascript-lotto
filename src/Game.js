/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Purchase from './Purchase.js';
import Statistics from './Statistics.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoGenerator from './LottoGenerator.js';

class Game {
  constructor() {
    this.purchase = ' ';
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.lottos = [];
  }

  async start() {
    await this.initPurchaseAmount();
    this.showLottoNumbers();
    await this.initWinningNumbers();
    await this.initBonusNumber();
    this.showResult();
  }

  async initPurchaseAmount() {
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

  async initWinningNumbers() {
    const inputWinningNumber = await InputView.getWinningNumbers();
    this.winningNumbers = new Lotto(inputWinningNumber).getLottoArray();
  }

  async initBonusNumber() {
    const inputBonusNumber = await InputView.getBonusNumber();
    this.bonusNumber = new Bonus(
      inputBonusNumber,
      this.winningNumbers,
    ).getBonusNumber();
  }

  showResult() {
    const statistics = new Statistics(
      this.lottos,
      this.winningNumbers,
      this.bonusNumber,
    );
    statistics.main();
    const result = statistics.getResult();
    console.log(result);
  }
}

export default Game;
