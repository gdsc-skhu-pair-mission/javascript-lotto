/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Purchase from './Purchase.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoGenerator from './LottoGenerator.js';

class Game {
  constructor() {
    this.purchase = null;
  }

  async start() {
    await this.getPurchaseAmount();
    this.showLottoNumbers();
  }

  async getPurchaseAmount() {
    const inputUserMoney = await InputView.getInputMoney();
    this.purchase = new Purchase(inputUserMoney);
    OutputView.showLottoCount(this.purchase.getQuantity());
  }

  showLottoNumbers() {
    const lottos = LottoGenerator.generate(this.purchase.getQuantity());
    lottos.forEach((lotto) => {
      OutputView.showLottoNumbers(lotto);
    });
  }
}

export default Game;
