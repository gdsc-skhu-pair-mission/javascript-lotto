const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/Message');

class InputView {
  static async getInputMoney() {
    return Console.readLineAsync(INPUT_MESSAGE.purchase_amount);
  }

  static async getWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGE.winning_numbers);
  }

  static async getBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.bonus_number);
  }
}

module.exports = InputView;
