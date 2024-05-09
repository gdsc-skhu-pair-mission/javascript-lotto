/* eslint-disable class-methods-use-this */
const { Lotto } = require('./Lotto');
const { Bonus } = require('./Bonus');
const { Purchase } = require('./Purchase');
const { InputView } = require('./view/InputView');

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

module.exports = Game;
