/* eslint-disable class-methods-use-this */
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Purchase from './Purchase.js';
import InputView from './view/InputView.js';

class Game {
  constructor() {
    this.purchase = null;
  }

  async start() {}

  async getPurchaseAmount() {
    const inputUserMoney = await InputView.getInputMoney();
    this.purchase = new Purchase(inputUserMoney);
  }
}

export default Game;
