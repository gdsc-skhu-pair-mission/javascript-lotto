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
  #purchase;
  #winningNumbers;
  #bonusNumber;
  #lottos;

  constructor() {
    this.#purchase = ' ';
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
    this.#lottos = [];
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
    this.#purchase = new Purchase(inputUserMoney);
    OutputView.showLottoCount(this.#purchase.getQuantity());
  }

  showLottoNumbers() {
    this.#lottos = LottoGenerator.generate(this.#purchase.getQuantity());
    this.#lottos.forEach((lotto) => {
      OutputView.showLottoNumbers(lotto);
    });
  }

  async initWinningNumbers() {
    const inputWinningNumberStringVersion = await InputView.getWinningNumbers();
    const inputWinningNumberNumberVersion = this.changeStringToArray(
      inputWinningNumberStringVersion,
    );
    this.#winningNumbers = new Lotto(
      inputWinningNumberNumberVersion,
    ).getLottoArray();
  }

  changeStringToArray(inputNumbers) {
    let numbers = [];

    numbers = inputNumbers.split(',').map((number) => Number(number));

    return numbers;
  }

  async initBonusNumber() {
    const inputBonusNumber = await InputView.getBonusNumber();
    this.#bonusNumber = new Bonus(
      inputBonusNumber,
      this.#winningNumbers,
    ).getBonusNumber();
  }

  showResult() {
    const statistics = new Statistics(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    statistics.main();
    const result = statistics.getResult();
    OutputView.showStatistics(result);
    const rate = statistics.calculateRate(this.#purchase.getAmount());
    OutputView.showProfit(rate);
  }
}

export default Game;
